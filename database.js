"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const poolConfig = {
    host: process.env.DATABASE_HOST,
    port: Number.parseInt((_a = process.env.DATABASE_PORT) !== null && _a !== void 0 ? _a : "3306"),
    user: process.env.DATABASE_USERNAME,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    waitForConnections: true,
    connectionLimit: 0,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
};
const pool = mysql2_1.default.createPool(poolConfig);
pool.on("connection", function (connection) {
    connection.query("SET time_zone = '+03:00'", (err) => {
        if (err) {
            console.error("Failed to set time zone for connection:", err);
        }
        else {
            console.log("Time zone set to Africa/Nairobi for connection.");
        }
    });
});
exports.database = pool;
