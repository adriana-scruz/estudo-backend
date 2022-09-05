const crypto = require("crypto");
const { ulid } = require("ulid");

class UserDAO {
  constructor(dbConn) {
    this.db = dbConn;
  }

  save(data) {
    const { name, email, password } = data;
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
      .pbkdf2Sync(password, salt, 1000, 64, "sha512")
      .toString("hex");
    const sql = `INSERT INTO users (id, name, email, hash, salt) VALUES (?, ?, ?, ?, ?)`;
    this.db.run(sql, [ulid(), name, email, hash, salt], (err, data) => {
      console.log("ERR", err);
      if (err) {
        resizeBy.json({ message: "Failed to add user" });
      } else {
        res.json({ message: "User added successfully" });
      }
    });
  }

  findOne(callback) {
    const sql = `SELECT * FROM users`;
    this.db.all(sql, callback);
  }
}

//module.exports = new UserDAO();
module.exports = (dbConn) => {
  return new UserDAO(dbConn);
};
