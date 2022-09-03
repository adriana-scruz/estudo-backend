class UserDAO {
  constructor(dbConn) {
    this.db = dbConn;
  }

  save() {
    console.log("saving use data...");
    this.db.run();
  }

  findOne() {
    console.log("finding use data...");
    const sql = `SELECT * FROM users`;
    this.db.all(sql, (err, data) => {
      console.log(err);
      console.log(data);
    });
  }
}

//module.exports = new UserDAO();
module.exports = (dbConn) => {
  return new UserDAO(dbConn);
};
