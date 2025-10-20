// // const db = require("../config/db");

// // const createUser = async (email, hashedPassword, roleId = 3) => {
// //   const [result] = await db.execute(
// //     `INSERT INTO users (role_id, email, password, created_at, updated_at) 
// //      VALUES (?, ?, ?, NOW(), NOW())`,
// //     [roleId, email, hashedPassword]
// //   );
// //   return result.insertId; // return new user id
// // };


// // async function getAdminById(userId) {
// //   const [rows] = await db.query(
// //     `SELECT u.id, u.email, r.name AS role_name
// //      FROM users u
// //      JOIN roles r ON u.role_id = r.id
// //      WHERE u.id = ?`,
// //     [userId]
// //   );
// //   return rows[0]; // ek hi admin aayega
// // }

// // const findByEmail = async (email) => {
// //   const [rows] = await db.execute(`SELECT * FROM users WHERE email = ?`, [email]);
// //   return rows[0];
// // };

// // const findById = async (id) => {
// //   const [rows] = await db.query(`SELECT id, role_id FROM users WHERE id = ?`, [id]);
// //   return rows[0];
// // };

// // const updatePassword = async (id, hashedPassword) => {
// //   return db.query(`UPDATE users SET password = ? WHERE id = ?`, [hashedPassword, id]);
// // };

// // const getPassword = async (id) => {
// //   const [rows] = await db.query(`SELECT password FROM users WHERE id = ?`, [id]);
// //   return rows[0]?.password;
// // };

// // module.exports = { createUser, getAdminById, findByEmail, findById, updatePassword, getPassword };
// // backend/models/User.js
// const db = require("../config/db");

// const createUser = async (email, hashedPassword, roleId = 3) => {
//   const result = await db.query(
//     `INSERT INTO users (role_id, email, password, created_at, updated_at) 
//      VALUES ($1, $2, $3, NOW(), NOW())
//      RETURNING id`,
//     [roleId, email, hashedPassword]
//   );
//   return result.rows[0].id; // PostgreSQL returns id here
// };

// async function getAdminById(userId) {
//   const result = await db.query(
//     `SELECT u.id, u.email, r.name AS role_name
//      FROM users u
//      JOIN roles r ON u.role_id = r.id
//      WHERE u.id = $1`,
//     [userId]
//   );
//   return result.rows[0];
// }

// const findByEmail = async (email) => {
//   const result = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
//   return result.rows[0];
// };

// const findById = async (id) => {
//   const result = await db.query(`SELECT id, role_id FROM users WHERE id = $1`, [id]);
//   return result.rows[0];
// };

// const updatePassword = async (id, hashedPassword) => {
//   return db.query(`UPDATE users SET password = $1 WHERE id = $2`, [hashedPassword, id]);
// };

// const getPassword = async (id) => {
//   const result = await db.query(`SELECT password FROM users WHERE id = $1`, [id]);
//   return result.rows[0]?.password;
// };

// module.exports = { createUser, getAdminById, findByEmail, findById, updatePassword, getPassword };
const db = require("../config/db");

const createUser = async (email, hashedPassword, roleId = 3) => {
  const result = await db.query(
    `INSERT INTO users (role_id, email, password, created_at, updated_at)
     VALUES ($1, $2, $3, NOW(), NOW())
     RETURNING id`,
    [roleId, email, hashedPassword]
  );
  return result.rows[0].id;
};

const findByEmail = async (email) => {
  const result = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
  return result.rows[0];
};

const findById = async (id) => {
  const result = await db.query(`SELECT id, role_id FROM users WHERE id = $1`, [id]);
  return result.rows[0];
};

const getAdminById = async (userId) => {
  const result = await db.query(
    `SELECT u.id, u.email, r.name AS role_name
     FROM users u
     JOIN roles r ON u.role_id = r.id
     WHERE u.id = $1`,
    [userId]
  );
  return result.rows[0];
};

const updatePassword = async (id, hashedPassword) => {
  await db.query(`UPDATE users SET password = $1 WHERE id = $2`, [hashedPassword, id]);
};

const getPassword = async (id) => {
  const result = await db.query(`SELECT password FROM users WHERE id = $1`, [id]);
  return result.rows[0]?.password;
};

module.exports = {
  createUser,
  findByEmail,
  findById,
  getAdminById,
  updatePassword,
  getPassword,
};
