class UserDAO {
  save() {
    console.log("saving use data...");
  }

  findOne() {
    console.log("finding use data...");
  }
}

module.exports = new UserDAO();
