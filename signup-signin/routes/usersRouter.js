const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// SignUp (Cadastrar)
router.post("/signup", usersController.signup);

// SignIn (Logado)
router.post("/signin", usersController.signin);

module.exports = router;
