const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("I am hear");
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    console.log("I am hear");
    var ext = file.originalname.substr(file.originalname.lastIndexOf("."));
    cb(null, Date.now() + "--" + file.originalname);
  },
});

module.exports = store = multer({ storage });
