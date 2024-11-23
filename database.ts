import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const poolConfig: mysql.PoolOptions = {
  host: process.env.DATABASE_HOST,
  port: Number.parseInt(process.env.DATABASE_PORT ?? "3306"),
  user: process.env.DATABASE_USERNAME,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  waitForConnections: true,
  connectionLimit: 100,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
};

const pool = mysql.createPool(poolConfig);

pool.on("connection", function (connection) {
  connection.query("SET time_zone = '+00:00'", (err) => {
    if (err) {
      console.error("Failed to set time zone for connection:", err);
    } else {
      console.log("Time zone set to GMT+0 for connection.");
    }
  });
});

export const database: mysql.Pool = pool;
