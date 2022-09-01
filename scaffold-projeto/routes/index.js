var express = require("express");
const uploadController = require("../controller/upload");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Desafio" });
});
router.post("/upload", uploadController.upload);
router.get("/sucess", uploadController.sucess);
router.get("/error", uploadController.error);

module.exports = router;
