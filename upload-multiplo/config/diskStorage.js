module.exports = (multer) => {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, res, cb) => {
      const { originalname } = file;
      const fileName = Date.now();
      const ext = originalname.split(".").pop();
      cb(null, `${fileName}.${ext}`);
    },
  });
};
