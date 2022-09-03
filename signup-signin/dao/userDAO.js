class UserDAO {
  constructor(dbConn) {
    this.db = dbConn;
  }

  save() {
    console.log("saving use data...");
    this.db.run();
  }

  findOne() {
    const sql = `SELECT * FROM users`;
    this.db.all(sql, callback);
  }
}

//module.exports = new UserDAO();
module.exports = (dbConn) => {
  return new UserDAO(dbConn);
};
