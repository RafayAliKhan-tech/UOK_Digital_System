// backend/controllers/authController.js
const jwt = require("jsonwebtoken");
const db = require("../config/db");
const { findBySeatAndDepartment, updateStudentUserId } = require("../models/Student");
const { createUser, findByEmail } = require("../models/User");
const { hashPassword, comparePassword } = require("../utils/password");

// Register
const registerUser = async (req, res) => {
  const { seatNumber, email, department, password } = req.body;
  if (!seatNumber || !email || !department || !password)
    return res.status(400).json({ message: "All fields are required" });

  try {
    const student = await findBySeatAndDepartment(seatNumber, department);
    if (!student)
      return res.status(400).json({ message: "Invalid seat number or department" });

    if (student.user_id)
      return res.status(400).json({ message: "Account already exists for this student" });

    const existingUser = await findByEmail(email);
    if (existingUser)
      return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await hashPassword(password);
    const newUserId = await createUser(email, hashedPassword, 3); // student role
    await updateStudentUserId(student.id, newUserId);

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("❌ Error in registerUser:", err);
    res.status(500).json({ message: "Error registering user" });
  }
};

// Login
const loginUser = async (req, res) => {

  const { email, password, userType } = req.body;
  try {
    console.log("Logging in email:", email);
    const user = await findByEmail(email);
    console.log("Fetched user:", user); 
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await comparePassword(password, user.password || "");
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const roleResult = await db.query(`SELECT slug, name FROM roles WHERE id=$1`, [user.role_id]);
    console.log("Role result:", roleResult.rows);
    const role = roleResult.rows[0];
    if (!role) return res.status(400).json({ message: "User role not found" });

    if ((userType === "student" && role.slug !== "student") ||
        (userType === "admin" && role.slug === "student")) {
      return res.status(403).json({ message: "Please login through correct tab" });
    }

    const payload = { id: user.id, role: role.slug, email: user.email };
    // ✅ Debug: check payload and JWT secret
console.log("Payload:", payload, "JWT_SECRET:", process.env.JWT_SECRET);
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "30d" });

    res.json({
      message: "Login successful",
      token,
      userId: user.id,
      roleSlug: role.slug,
      roleName: role.name,
      userType
    });
  } catch (err) {
    console.error("❌ Error in loginUser:", err);
    res.status(500).json({ message: "Error logging in" });
  }
};

module.exports = { registerUser, loginUser };
