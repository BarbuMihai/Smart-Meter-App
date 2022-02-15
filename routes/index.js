var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.json({ response: "GETs" });
});

router.post("/mishu", function (req, res, next) {
  res.json({ response: "POST" });
});

module.exports = router;
