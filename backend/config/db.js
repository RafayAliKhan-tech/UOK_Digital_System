// // // // // // // // const { Pool } = require("pg"); // Change to pg for PostgreSQL
// // // // // // // // const dotenv = require("dotenv");

// // // // // // // // dotenv.config();

// // // // // // // // const db = new Pool({
// // // // // // // //   host: process.env.DB_HOST,
// // // // // // // //   user: process.env.DB_USER,
// // // // // // // //   password: process.env.DB_PASSWORD,
// // // // // // // //   database: process.env.DB_NAME,
// // // // // // // //   port: 5432, // PostgreSQL default
// // // // // // // // });

// // // // // // // // module.exports = db;
// // // // // // // const { Pool } = require("pg");
// // // // // // // const dotenv = require("dotenv");

// // // // // // // dotenv.config();
// // // // // // // console.log(process.env.DB_HOST, process.env.DB_USER, process.env.DB_NAME);

// // // // // // // const db = new Pool({

// // // // // // //   host: process.env.DB_HOST,
// // // // // // //   user: process.env.DB_USER,
// // // // // // //   password: process.env.DB_PASSWORD,
// // // // // // //   database: process.env.DB_NAME,
// // // // // // //   port: process.env.DB_PORT || 5432,
// // // // // // // });

// // // // // // // module.exports = db;
// // // // // // const { Pool } = require("pg");
// // // // // // const dotenv = require("dotenv");

// // // // // // dotenv.config();

// // // // // // const db = new Pool({
// // // // // //   host: process.env.DB_HOST,
// // // // // //   user: process.env.DB_USER,
// // // // // //   password: process.env.DB_PASSWORD,
// // // // // //   database: process.env.DB_NAME,
// // // // // //   port: process.env.DB_PORT || 5432,
// // // // // //   ssl: {
// // // // // //     rejectUnauthorized: false  // ✅ Important for Supabase
// // // // // //   }
// // // // // // });

// // // // // // module.exports = db;
// // // // // const { Pool } = require("pg");

// // // // // const pool = new Pool({
// // // // //   host: process.env.DB_HOST,
// // // // //   user: process.env.DB_USER,
// // // // //   password: process.env.DB_PASSWORD,
// // // // //   database: process.env.DB_NAME,
// // // // //   port: process.env.DB_PORT,
// // // // // });

// // // // // pool.query("SELECT NOW()", (err, res) => {
// // // // //   if(err) console.error("❌ DB Error:", err);
// // // // //   else console.log("✅ DB Connected:", res.rows);
// // // // // });

// // // // // module.exports = pool;
// // // // const { Pool } = require("pg");
// // // // const dotenv = require("dotenv");

// // // // dotenv.config();

// // // // const pool = new Pool({
// // // //   host: process.env.DB_HOST,
// // // //   user: process.env.DB_USER,
// // // //   password: process.env.DB_PASSWORD,
// // // //   database: process.env.DB_NAME,
// // // //   port: process.env.DB_PORT || 5432,
// // // //   ssl: { rejectUnauthorized: false } // ✅ Required for cloud PostgreSQL
// // // // });

// // // // pool.query("SELECT NOW()", (err, res) => {
// // // //   if (err) console.error("❌ DB Error:", err);
// // // //   else console.log("✅ DB Connected:", res.rows);
// // // // });

// // // // module.exports = pool;
// // // const { Pool } = require("pg");
// // // const dotenv = require("dotenv");
// // // dotenv.config();

// // // const db = new Pool({
// // //   host: process.env.DB_HOST,
// // //   user: process.env.DB_USER,
// // //   password: process.env.DB_PASSWORD,
// // //   database: process.env.DB_NAME,
// // //   port: process.env.DB_PORT,
// // //   ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false
// // // });

// // // db.query("SELECT NOW()", (err, res) => {
// // //   if(err) console.error("❌ DB Error:", err);
// // //   else console.log("✅ DB Connected:", res.rows);
// // // });

// // // module.exports = db;
// // const { Pool } = require("pg");
// // const dotenv = require("dotenv");

// // dotenv.config();

// // const db = new Pool({
// //   host: process.env.DB_HOST,
// //   user: process.env.DB_USER,
// //   password: process.env.DB_PASSWORD,
// //   database: process.env.DB_NAME,
// //   port: process.env.DB_PORT || 5432,
// //    ssl: process.env.DB_SSL === "true",
// // });

// // // Test DB connection
// // db.query("SELECT NOW()", (err, res) => {
// //   if (err) console.error("❌ DB Error:", err);
// //   else console.log("✅ DB Connected:", res.rows);
// // });

// // module.exports = {
// //   query: (text, params) => pool.query(text, params),
// // };
const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const db = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432,
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false,
});

// Test DB connection
db.query("SELECT NOW()", (err, res) => {
  if (err) console.error("❌ DB Error:", err);
  else console.log("✅ DB Connected:", res.rows);
});

module.exports = {
  query: (text, params) => db.query(text, params),
};
// const { Pool } = require("pg");
// const dotenv = require("dotenv");

// dotenv.config();

// const db = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT || 5432,
//   ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false,
// });

// // Test connection
// db.query("SELECT NOW()", (err, res) => {
//   if (err) console.error("❌ DB Error:", err);
//   else console.log("✅ DB Connected:", res.rows);
// });

// module.exports = {
//   query: (text, params) => db.query(text, params),
// };
