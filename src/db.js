import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "root", // Coloca tu contraseña de MySQL
  database: "estudiantesussbog",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
