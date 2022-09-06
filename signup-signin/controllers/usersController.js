// DAO (Data Access Object)
const dbConn = require("../infra/dbConn");
const UserDAO = require("../dao/userDAO")(dbConn);

// SignUp
exports.signup = (req, res) => {
  const callback = (err) => {
    if (err) {
      res.status(500).json({ message: "Failed to add user" });
    } else {
      res.status(201).json({ message: "User added successfully" });
    }
  };

  UserDAO.save(req.body, callback);
};

// SignIn
exports.signin = (req, res) => {
  UserDAO.findOne(req.body, (err, data, pwdIsValid) => {
    res.json();
  });
};

/*
REF ALTERNATIVO
module.exports = {
  signup: (req,res) => {},
  signin: (req, res) => {},
};
*/
