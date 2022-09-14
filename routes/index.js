const express = require("express");
const router = express.Router();
const formidable = require("formidable");


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/upload", (req, res) => {
  const form = new formidable.IncomingForm({
    uploadDir: "./upload",
    keepExtensions: true,
  });
  form.parse(req, (err, fields, files) => {
    console.log(err)
    res.json({ files });
  });
});

module.exports = router;
