const multer = require("multer");
const storage = require("../config/diskStorage")(multer);

const multipleUpload = multer().array("files");

exports.upload = (req, res) => {
  multipleUpload(req, res, (err) => {
    res.end("UPLOADING...");
  });
};

exports.index = (req, res) => {
  res.render("index");
};

exports.success = (req, res) => {
  res.render("success");
};

exports.error = (req, res) => {
  res.render("error");
};
