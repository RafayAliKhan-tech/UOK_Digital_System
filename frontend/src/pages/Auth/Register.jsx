// //  Register.jsx
// import React, { useState, useContext, useEffect } from "react";

// import { Link, useNavigate } from "react-router-dom";
// import {
//   GraduationCap,
//   Lightbulb,
//   Pencil,
//   Microscope,
//   BookOpen,
//   FlaskConical,
//   Globe,
//   Laptop,
//   Smartphone,
//   FileText,
//   MapPin,
// } from "lucide-react";

// import logo from "../../assets/logo.png";
// const Register = () => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     document.title = "UOK-DFS - Register";
//   }, []);
//   const departments = [
//     "Computer Science",
//     "Applied Physics",
//     "Zoology",
//   ];

//   const [formData, setFormData] = useState({
//     seatNumber: "",
//     email: "",
//     department: "",
//     password: "",
//     showPassword: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   console.log("Sending data to backend:", {
//     seatNumber: formData.seatNumber,
//     email: formData.email,
//     department: formData.department,
//     password: formData.password,
//   });

//   try {
//     // Sending POST request to backend
//     // const response = await fetch("http://localhost:5000/api/auth/register", {
//       const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",  // Ensuring that data is in JSON format
//       },
//       body: JSON.stringify({
//         seatNumber: formData.seatNumber,
//         email: formData.email,
//         department: formData.department,
//         password: formData.password,
//       }),
//     });

//     const data = await response.json();  // Parse the response JSON

//     // If registration was successful
//     if (response.ok) {
//       alert("✅ Registered Successfully!");
//       navigate("/login");  // Redirect to login page
//     } else {
//       // Display error message from backend
//       alert("❌ " + data.message || "Registration failed");
//     }
//   } catch (error) {
//     // Handle network or other unexpected errors
//     console.error("❌ Registration Error:", error);
//     alert("❌ Failed to register. Please try again.");
//   }
// };


//   return (
//     <div className="relative flex flex-col md:flex-row h-screen w-screen overflow-hidden font-sans">
//       {/* Left Section with Animated Icons */}
//       <div className="relative hidden md:flex w-1/2 flex-col justify-center items-center bg-gradient-to-br from-green-600 to-green-700 overflow-hidden">
//         <div className="absolute inset-0 opacity-30 z-10">
//           <GraduationCap className="absolute top-6 left-6 w-10 h-10 lg:w-14 lg:h-14 text-green-100 animate-float-slow" />

//           <Lightbulb className="absolute top-10 right-10 w-10 h-10 lg:w-14 lg:h-14 text-yellow-200 animate-spin-slow" />

//           <BookOpen className="absolute top-2/7 left-25 w-9 h-9 lg:w-12 lg:h-12 text-green-200 animate-float-fast" />

//           <FileText className="absolute top-[60%] left-12 w-9 h-9 lg:w-12 lg:h-12 text-green-100 animate-rotate-slow" />

//           <Globe className="absolute top-1/2 right-16 w-10 h-10 lg:w-14 lg:h-14 text-green-200 animate-swing" />

//           <Laptop className="absolute top-1/2 left-1/3 w-10 h-10 lg:w-14 lg:h-14 text-green-100 animate-tilt" />

//           <Pencil className="absolute bottom-20 left-8 w-9 h-9 lg:w-12 lg:h-12 text-green-100 animate-bounce-subtle" />

//           <MapPin className="absolute bottom-8 left-60 w-9 h-9 lg:w-12 lg:h-12 text-emerald-300 animate-pulse-fast" />

//           <FlaskConical className="absolute bottom-20 right-14 w-10 h-10 lg:w-14 lg:h-14 text-emerald-200 animate-float-slow" />

//           <Microscope className="absolute bottom-10 right-1/3 w-12 h-12 lg:w-16 lg:h-16 text-green-100 animate-rotate-slow" />

//           <Globe className="absolute top-5 left-2/5 transform translate-x-10 w-9 h-9 lg:w-12 lg:h-12 text-emerald-200 animate-float-fast" />

//           <Smartphone className="absolute top-48 left-[60%] transform translate-x-14 w-9 h-9 lg:w-12 lg:h-12 text-green-200 animate-swing" />
//         </div>



//         <div className="text-center max-w-md lg:max-w-lg text-white px-6 lg:px-10 z-20 drop-shadow-lg">
//           <div className="flex justify-center mb-6">
//             <img
//               src={logo}
//               alt="UOK Logo"
//               className="w-56 h-56 lg:w-72 lg:h-72 object-contain rounded-full drop-shadow-lg animate-fade-in"
//               style={{ filter: "brightness(0) invert(1)" }}
//             />
//           </div>
//           <h1
//             className="text-xl lg:text-2xl font-semibold mb-3 animate-fade-in tracking-[0.17em] uppercase"
//           >
//             Break the Manual Limits
//           </h1>

//           <p
//             className="text-base lg:text-lg leading-relaxed text-green-100 animate-fade-in delay-500 underline decoration-2 underline-offset-7"
//           >
//             Register Now and Enter the Digital Revolution
//           </p>

//         </div>
//       </div>

//       {/* Right Section (Form) */}
//       <div className="relative w-full md:w-1/2 flex justify-center items-center px-4 sm:px-6 bg-white overflow-hidden">
//         <div className="relative w-full max-w-sm sm:max-w-md bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 sm:p-8 border border-gray-100 animate-fade-in-up z-10">
//           <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center">
//             Create Your Account
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Seat Number */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Seat Number
//               </label>
//               <input
//                 type="text"
//                 name="seatNumber"
//                 placeholder="Enter Your Seat Number"
//                 value={formData.seatNumber}
//                 onChange={handleChange}
//                 required
//                 pattern="^[A-Z]{1}[0-9]{2}[0-9]{9}$"
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:shadow-md text-sm sm:text-base"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:shadow-md text-sm sm:text-base"
//               />
//             </div>

//             {/* Department */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Department
//               </label>
//               <select
//                 name="department"
//                 value={formData.department}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:shadow-md text-sm sm:text-base"
//               >
//                 <option value="">Select Department</option>
//                 {departments.map((dept, i) => (
//                   <option key={i} value={dept}>
//                     {dept}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Password
//               </label>
//               <input
//                 type={formData.showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password (5–9 characters)"
//                 value={formData.password}
//                 onChange={handleChange}
//                 minLength={5}
//                 maxLength={9}
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition hover:shadow-md text-sm sm:text-base"
//               />
//             </div>

//             {/* Show Password */}
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 name="showPassword"
//                 checked={formData.showPassword}
//                 onChange={handleChange}
//                 className="mr-2 accent-green-600"
//               />
//               <label className="text-sm text-gray-700">Show Password</label>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 sm:py-2.5 rounded-lg transition transform hover:scale-105 shadow-md text-sm sm:text-base"
//             >
//               Register
//             </button>

//             {/* Redirect */}
//             <p className="text-xs sm:text-sm text-center mt-4">
//               Already have an account?{" "}
//               <Link
//                 to="/login"
//                 className="text-green-600 hover:underline font-medium"
//               >
//                 Login here
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


// Register.jsx
import React, { useState, useContext, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import {
  GraduationCap,
  Lightbulb,
  Pencil,
  Microscope,
  BookOpen,
  FlaskConical,
  Globe,
  Laptop,
  Smartphone,
  FileText,
  MapPin,
  Eye, // I'll assume you have Eye/EyeOff for the UI improvement, even if they weren't in your original imports list.
  EyeOff,
} from "lucide-react";

import logo from "../../assets/logo.png";
const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "UOK-DFS - Register";
  }, []);
  const departments = [
    "Computer Science",
    "Applied Physics",
    "Zoology",
  ];

  const [formData, setFormData] = useState({
    seatNumber: "",
    email: "",
    department: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending data to backend:", {
      seatNumber: formData.seatNumber,
      email: formData.email,
      department: formData.department,
      password: formData.password,
    });

    try {
      // Sending POST request to backend
      // const response = await fetch("http://localhost:5000/api/auth/register", {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Ensuring that data is in JSON format
          },
          body: JSON.stringify({
            seatNumber: formData.seatNumber,
            email: formData.email,
            department: formData.department,
            password: formData.password,
          }),
        }
      );

      const data = await response.json(); // Parse the response JSON

      // If registration was successful
      if (response.ok) {
        alert("✅ Registered Successfully!");
        navigate("/login"); // Redirect to login page
      } else {
        // Display error message from backend
        alert("❌ " + data.message || "Registration failed");
      }
    } catch (error) {
      // Handle network or other unexpected errors
      console.error("❌ Registration Error:", error);
      alert("❌ Failed to register. Please try again.");
    }
  };

  return (
    // **UI Improvement: Changed h-screen w-screen to min-h-screen w-full for better responsiveness and scrollability on small devices.**
    <div className="relative flex flex-col md:flex-row min-h-screen w-full font-sans bg-white">
      {/* Left Section with Animated Icons (Desktop View) */}
      {/* **UI Improvement: Changed from-green-700 for a deeper, richer gradient and better shadow for depth.** */}
      <div className="relative hidden md:flex w-1/2 flex-col justify-center items-center bg-gradient-to-br from-green-700 to-green-900 overflow-hidden shadow-2xl">
        {/* **UI Improvement: Increased opacity for icons to be more visible and adjusted sizes/positions for better distribution.** */}
        <div className="absolute inset-0 opacity-50 z-10">
          <GraduationCap className="absolute top-10 left-10 w-12 h-12 text-green-100 animate-float-slow" />

          <Lightbulb className="absolute top-20 right-1/4 w-12 h-12 text-yellow-300 animate-spin-slow" />

          <BookOpen className="absolute top-1/3 left-1/4 w-10 h-10 text-green-200 animate-float-fast" />

          <FileText className="absolute bottom-1/4 left-16 w-10 h-10 text-green-100 animate-rotate-slow" />

          <Globe className="absolute top-1/2 right-12 w-12 h-12 text-green-200 animate-swing" />

          <Laptop className="absolute top-2/5 left-1/3 w-12 h-12 text-green-100 animate-tilt" />

          <Pencil className="absolute bottom-16 left-1/3 w-10 h-10 text-green-100 animate-bounce-subtle" />

          <MapPin className="absolute bottom-12 right-1/5 w-10 h-10 text-emerald-300 animate-pulse-fast" />

          <FlaskConical className="absolute bottom-1/2 right-1/4 w-12 h-12 text-emerald-200 animate-float-slow" />

          <Microscope className="absolute top-1/4 right-1/2 w-14 h-14 text-green-100 animate-rotate-slow" />

          {/* Hidden/Subtle Icons */}
          <Globe className="absolute top-5 left-1/2 w-10 h-10 text-emerald-200 opacity-50 animate-float-fast" />
          <Smartphone className="absolute top-3/4 left-[60%] w-10 h-10 text-green-200 opacity-50 animate-swing" />
        </div>

        <div className="text-center max-w-lg text-white px-10 z-20 drop-shadow-2xl">
          <div className="flex justify-center mb-8">
            <img
              src={logo}
              alt="UOK Logo"
              // **UI Improvement: Adjusted size for better desktop view**
              className="w-48 h-48 lg:w-64 lg:h-64 object-contain rounded-full drop-shadow-xl animate-fade-in"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
          <h1
            // **UI Improvement: Made the heading bigger, bolder, and more spaced out**
            className="text-2xl lg:text-3xl font-extrabold mb-4 animate-fade-in tracking-widest uppercase"
          >
            UOK Digital File System
          </h1>

          <p
            // **UI Improvement: Made the text larger and added a font-light for elegance**
            className="text-lg lg:text-xl leading-relaxed text-green-200 animate-fade-in delay-500 font-light"
          >
            Register Now and Enter the Digital Revolution
          </p>
        </div>
      </div>

      {/* Right Section (Form) */}
      {/* **UI Improvement: Increased vertical padding (py-12) for better centering on small screens** */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center px-4 sm:px-6 py-12 md:py-0 bg-gray-50 overflow-auto">
        <div
          // **UI Improvement: Enhanced shadow, smoother corners, and better padding**
          className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 sm:p-10 border border-gray-200 animate-fade-in-up z-10"
        >
          {/* Logo on Mobile (Hidden on MD and above) */}
          <div className="flex md:hidden justify-center mb-6">
            <img src={logo} alt="UOK Logo" className="w-20 h-20 object-contain drop-shadow-sm" />
          </div>

          <h2
            // **UI Improvement: Bolder, slightly bigger, and changed text color for emphasis**
            className="text-3xl font-extrabold mb-8 text-green-700 text-center tracking-tight"
          >
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Seat Number */}
            <div>
              <label
                // **UI Improvement: Made label font semi-bold and added more margin**
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Seat Number
              </label>
              <input
                type="text"
                name="seatNumber"
                placeholder="e.g., C2100000000"
                value={formData.seatNumber}
                onChange={handleChange}
                required
                pattern="^[A-Z]{1}[0-9]{2}[0-9]{9}$"
                // **UI Improvement: Added subtle gray background, increased padding, and refined focus/hover effects**
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-gray-50 focus:outline-none focus:ring-3 focus:ring-green-200 focus:border-green-500 transition duration-300 text-base shadow-inner"
              />
            </div>

            {/* Email (Same UI improvements as Seat Number) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-gray-50 focus:outline-none focus:ring-3 focus:ring-green-200 focus:border-green-500 transition duration-300 text-base shadow-inner"
              />
            </div>

            {/* Department (Same UI improvements) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Department
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                // **UI Improvement: Use py-2.5 for consistent height and white background for selection field**
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white appearance-none cursor-pointer focus:outline-none focus:ring-3 focus:ring-green-200 focus:border-green-500 transition duration-300 text-base shadow-inner"
              >
                <option value="" disabled>
                  Select Department
                </option>
                {departments.map((dept, i) => (
                  <option key={i} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            {/* Password (With a visual toggle button) */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type={formData.showPassword ? "text" : "password"}
                name="password"
                placeholder="Password (5–9 characters)"
                value={formData.password}
                onChange={handleChange}
                minLength={5}
                maxLength={9}
                required
                // **UI Improvement: Consistent input styling**
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-gray-50 focus:outline-none focus:ring-3 focus:ring-green-200 focus:border-green-500 transition duration-300 text-base shadow-inner pr-10" // added pr-10 for icon space
              />
              {/* **UI Improvement: Visual Password Toggle Button** */}
              <button
                type="button"
                className="absolute right-3 top-[60%] transform -translate-y-1/2 text-gray-400 hover:text-green-600 transition duration-200"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    showPassword: !prev.showPassword,
                  }))
                }
              >
                {formData.showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Show Password (Kept for state change logic, but UI is secondary to the icon) */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="showPassword"
                checked={formData.showPassword}
                onChange={handleChange}
                // **UI Improvement: More visible checkbox**
                className="mr-2 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 accent-green-600 cursor-pointer"
              />
              <label className="text-sm text-gray-700 select-none">
                Show Password
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              // **UI Improvement: Bolder colors, larger button (py-3), rounded-xl, and significant hover effect**
              className="w-full bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-bold py-3 rounded-xl transition duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-lg tracking-wide mt-6"
            >
              Register
            </button>

            {/* Redirect */}
            <p className="text-sm text-center mt-5 text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                // **UI Improvement: Bolder link with better hover state**
                className="text-green-700 hover:text-green-900 font-bold hover:underline transition duration-300"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;