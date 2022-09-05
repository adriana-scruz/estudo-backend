// DAO (Data Access Object)
const dbConn = require("../infra/dbConn");
const UserDAO = require("../dao/userDAO")(dbConn);

// SignUp
exports.signup = (req, res) => {
  UserDAO.save(req.body);
};

// SignIn
exports.signin = (req, res) => {
  UserDAO.findOne((err, data) => {
    if (err) {
      res.json({ message: err });
    } else {
      res.json(data);
    }
  });
};

/*
REF ALTERNATIVO
module.exports = {
  signup: (req,res) => {},
  signin: (req, res) => {},
};
*/
