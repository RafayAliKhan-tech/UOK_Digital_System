const { Pool } = require("pg"); // Change to pg for PostgreSQL
const dotenv = require("dotenv");

dotenv.config();

const db = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432, // PostgreSQL default
});

module.exports = db;
