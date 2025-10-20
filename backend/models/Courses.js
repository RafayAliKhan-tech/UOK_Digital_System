// // backend/models/Courses.js
// const db = require("../config/db");

// // ✅ Get courses by userId & semester
// const getCoursesByUserAndSemester = async (userId, semester) => {
//   // pehle student_id lo
//   const [student] = await db.execute(
//     `SELECT id FROM students WHERE user_id = ? LIMIT 1`,
//     [userId]
//   );

//   if (!student.length) return [];

//   const studentId = student[0].id;

//   // ab courses lo
//   const [rows] = await db.execute(
//     `SELECT id, course_code, course_name 
//        FROM courses 
//       WHERE student_id = ? AND sem_no = ?`,
//     [studentId, semester]
//   );

//   return rows;
// };

// module.exports = { getCoursesByUserAndSemester };
// backend/models/Courses.js
const db = require("../config/db");

// ✅ Get courses by userId & semester
const getCoursesByUserAndSemester = async (userId, semester) => {
  // pehle student_id lo
  const studentResult = await db.query(
    `SELECT id FROM students WHERE user_id = $1 LIMIT 1`,
    [userId]
  );

  if (!studentResult.rows.length) return [];

  const studentId = studentResult.rows[0].id;

  // ab courses lo
  const coursesResult = await db.query(
    `SELECT id, course_code, course_name 
       FROM courses 
      WHERE student_id = $1 AND sem_no = $2`,
    [studentId, semester]
  );

  return coursesResult.rows;
};

module.exports = { getCoursesByUserAndSemester };
