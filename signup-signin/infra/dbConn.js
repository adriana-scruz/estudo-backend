const { Database } = require("sqlite3");
const path = require("path");
const { DATABASE_PATH } = require("dotenv").config().parsed;

module.exports = new Database(path.resolve(DATABASE_PATH));
