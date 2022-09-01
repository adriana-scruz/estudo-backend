exports.upload = (req, res) => {
  const multer = require("multer");
  const storage = require("../config/diskStorage")(multer);
  const fileFilter = require("../config/fileFilter");
  const limits = require("../config/limits");
  const multipleUpload = multer({ storage, fileFilter, limits }).array("files");

  multipleUpload(req, res, (err) => {
    if (req.files.length > 0) {
      res.render("sucess", { images: req.files });
    } else {
      res.render("error");
    }
  });
};

exports.sucess = (req, res) => {
  res.render("sucess");
};

exports.error = (req, res) => {
  res.render("error");
};
