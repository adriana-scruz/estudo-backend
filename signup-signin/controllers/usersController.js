// DAO (Data Access Object)
const dbConn = require("../infra/dbConn");
const UserDAO = require("../dao/userDAO")(dbConn);

// SignUp
exports.signup = (req, res) => {
  UserDAO.save();
};

// SignIn
exports.signin = (req, res) => {
  UserDAO.findOne();
};

/*
REF ALTERNATIVO
module.exports = {
  signup: (req,res) => {},
  signin: (req, res) => {},
};
*/
