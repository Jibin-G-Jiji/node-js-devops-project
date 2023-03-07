const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "./public/images");
  },
  filename: function (req, file, cb) {
    console.log("Image add to image file");
    var ext = file.originalname.substr(file.originalname.lastIndexOf("."));
    cb(null, Date.now() + "--" + file.originalname);
  },
});

module.exports = store = multer({ storage });
