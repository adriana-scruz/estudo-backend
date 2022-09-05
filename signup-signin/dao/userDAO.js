const crypto = require("crypto");

class UserDAO {
  constructor(dbConn) {
    this.db = dbConn;
  }

  save(data) {
    console.log("saving use data...");
    const { name, email, password } = data;
    const salt = crypto.randomBytes(16);

    //this.db.run();
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
