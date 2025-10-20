// // // backend/models/Student.js
// // const db = require("../config/db");

// // // ✅ Find student by seat + department
// // const findBySeatAndDepartment = async (seatNumber, department) => {
// //   const result = await db.query(
// //     `SELECT * FROM students 
// //      WHERE seat_no = $1 
// //      AND depart_id = (SELECT id FROM departments_sci WHERE depart_name = $2)`,
// //     [seatNumber, department]
// //   );
// //   return result.rows[0];
// // };

// // // ✅ Student profile by user_id
// // const getStudentProfileByUserId = async (userId) => {
// //   const result = await db.query(
// //     `SELECT 
// //         s.id AS student_id,
// //         s.user_id,
// //         s.seat_no,
// //         s.name,
// //         s.program,
// //         s.current_sem_no,
// //         d.depart_name
// //      FROM students s
// //      JOIN departments_sci d ON s.depart_id = d.id
// //      WHERE s.user_id = $1`,
// //     [userId]
// //   );
// //   return result.rows[0];
// // };

// // // ✅ By student_id
// // const getStudentProfileByStudentId = async (studentId) => {
// //   const result = await db.query(
// //     `SELECT s.seat_no, s.name, s.program, s.current_sem_no, d.depart_name
// //      FROM students s
// //      JOIN departments_sci d ON s.depart_id = d.id
// //      WHERE s.id = $1`,
// //     [studentId]
// //   );
// //   return result.rows[0];
// // };

// // // ✅ Link user_id after register
// // const updateStudentUserId = async (studentId, userId) => {
// //   console.log(`📌 Linking studentId: ${studentId} with userId: ${userId}`);
// //   return db.query(`UPDATE students SET user_id = $1 WHERE id = $2`, [userId, studentId]);
// // };

// // module.exports = {
// //   findBySeatAndDepartment,
// //   getStudentProfileByUserId,
// //   getStudentProfileByStudentId,
// //   updateStudentUserId,
// // };
// const db = require("../config/db");

// const findBySeatAndDepartment = async (seatNumber, department) => {
//   const result = await db.query(
//     `SELECT * FROM students 
//      WHERE seat_no = $1 
//      AND depart_id = (SELECT id FROM departments_sci WHERE depart_name = $2)`,
//     [seatNumber, department]
//   );
//   return result.rows[0];
// };

// const getStudentProfileByUserId = async (userId) => {
//   const result = await db.query(
//     `SELECT s.id AS student_id, s.user_id, s.seat_no, s.name, s.program, s.current_sem_no,
//             d.depart_name
//      FROM students s
//      JOIN departments_sci d ON s.depart_id = d.id
//      WHERE s.user_id = $1`,
//     [userId]
//   );
//   return result.rows[0];
// };

// const getStudentProfileByStudentId = async (studentId) => {
//   const result = await db.query(
//     `SELECT s.seat_no, s.name, s.program, s.current_sem_no, d.depart_name
//      FROM students s
//      JOIN departments_sci d ON s.depart_id = d.id
//      WHERE s.id = $1`,
//     [studentId]
//   );
//   return result.rows[0];
// };

// const updateStudentUserId = async (studentId, userId) => {
//   await db.query(`UPDATE students SET user_id = $1 WHERE id = $2`, [userId, studentId]);
// };

// module.exports = {
//   findBySeatAndDepartment,
//   getStudentProfileByUserId,
//   getStudentProfileByStudentId,
//   updateStudentUserId,
// };
// backend/models/Student.js
const db = require("../config/db");

// ✅ Find student by seat + department
const findBySeatAndDepartment = async (seatNumber, department) => {
  const result = await db.query(
    `SELECT * FROM students 
     WHERE seat_no = $1 
       AND depart_id = (SELECT id FROM departments_sci WHERE depart_name = $2)`,
    [seatNumber, department]
  );
  return result.rows[0] || null;
};

// ✅ Student profile by user_id
const getStudentProfileByUserId = async (userId) => {
  const result = await db.query(
    `SELECT 
        s.id AS student_id,
        s.user_id,
        s.seat_no,
        s.name,
        s.program,
        s.current_sem_no,
        d.depart_name
     FROM students s
     JOIN departments_sci d ON s.depart_id = d.id
     WHERE s.user_id = $1`,
    [userId]
  );
  return result.rows[0] || null;
};

// ✅ Student profile by student_id
const getStudentProfileByStudentId = async (studentId) => {
  const result = await db.query(
    `SELECT 
        s.seat_no, 
        s.name, 
        s.program, 
        s.current_sem_no, 
        d.depart_name
     FROM students s
     JOIN departments_sci d ON s.depart_id = d.id
     WHERE s.id = $1`,
    [studentId]
  );
  return result.rows[0] || null;
};

// ✅ Link user_id after registration
const updateStudentUserId = async (studentId, userId) => {
  console.log(`📌 Linking studentId: ${studentId} with userId: ${userId}`);
  await db.query(
    `UPDATE students SET user_id = $1 WHERE id = $2`,
    [userId, studentId]
  );
};

module.exports = {
  findBySeatAndDepartment,
  getStudentProfileByUserId,
  getStudentProfileByStudentId,
  updateStudentUserId,
};
