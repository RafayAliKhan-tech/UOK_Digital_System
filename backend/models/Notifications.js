// // backend/models/Notifications.js
// const db = require("../config/db");

// // ✅ Create Notification
// const createNotification = async (toUserId, title, message) => {
//   return db.execute(
//     `INSERT INTO notifications (user_id, title, message, created_at, is_read)
//      VALUES (?, ?, ?, NOW(), 0)`,
//     [toUserId, title, message]
//   );
// };

// // ✅ Get Notifications for user
// const getNotificationsByUserId = async (userId) => {
//   return db.execute(
//     `SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC`,
//     [userId]
//   );
// };

// // ✅ Mark as Read
// const markAsRead = async (id, userId) => {
//   return db.execute(
//     `UPDATE notifications SET is_read = 1 WHERE id = ? AND user_id = ?`,
//     [id, userId]
//   );
// };

// module.exports = { createNotification, getNotificationsByUserId, markAsRead };
// backend/models/Notifications.js
// const db = require("../config/db");

// // ✅ Create Notification
// const createNotification = async (toUserId, title, message) => {
//   return db.query(
//     `INSERT INTO notifications (user_id, title, message, created_at, is_read)
//      VALUES ($1, $2, $3, NOW(), 0)`,
//     [toUserId, title, message]
//   );
// };

// // ✅ Get Notifications for user
// const getNotificationsByUserId = async (userId) => {
//   const result = await db.query(
//     `SELECT * FROM notifications WHERE user_id = $1 ORDER BY created_at DESC`,
//     [userId]
//   );
//   return result.rows;
// };

// // ✅ Mark as Read
// const markAsRead = async (id, userId) => {
//   return db.query(
//     `UPDATE notifications SET is_read = 1 WHERE id = $1 AND user_id = $2`,
//     [id, userId]
//   );
// };

// module.exports = { createNotification, getNotificationsByUserId, markAsRead };
// ✅ Create Notification
// backend/models/Notifications.js
const db = require("../config/db");
const createNotification = async (toUserId, title, message) => {
  return db.query(
    `INSERT INTO notifications (user_id, title, message, created_at, is_read)
     VALUES ($1, $2, $3, NOW(), false)`,   // ✅ use 'false' not 0
    [toUserId, title, message]
  );
};

// ✅ Get Notifications for user
const getNotificationsByUserId = async (userId) => {
  const result = await db.query(
    `SELECT * FROM notifications WHERE user_id = $1 ORDER BY created_at DESC`,
    [userId]
  );
  return result.rows;
};

// ✅ Mark as Read
const markAsRead = async (id, userId) => {
  return db.query(
    `UPDATE notifications SET is_read = true WHERE id = $1 AND user_id = $2`,  // ✅ use 'true' not 1
    [id, userId]
  );
};

module.exports = { createNotification, getNotificationsByUserId, markAsRead };
