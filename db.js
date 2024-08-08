/** Database for lunchly */
require("dotenv").config()
console.log("database uri",process.env.DB_URI)
const pg = require("pg");
const { Client } = require("pg");

const db = new pg.Client(process.env.DB_URI);

db.connect();

module.exports = db;
