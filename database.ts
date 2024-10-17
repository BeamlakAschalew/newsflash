import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const poolConfig: mysql.PoolOptions = {
  host: process.env.DATABASE_HOST,
  port: Number.parseInt(process.env.DATABASE_PORT ?? "3306"),
  user: process.env.DATABASE_USERNAME,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  localAddress: process.env.DATABASE_REQUEST_IP,
  waitForConnections: true,
  connectionLimit: 0,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
};

const pool = mysql.createPool(poolConfig);

pool.on("connection", function (connection) {
  connection.query("SET time_zone = '+03:00'", (err) => {
    if (err) {
      console.error("Failed to set time zone for connection:", err);
    } else {
      console.log("Time zone set to Africa/Nairobi for connection.");
    }
  });
});

export const database: mysql.Pool = pool;
