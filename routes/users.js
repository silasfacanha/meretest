const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Userlist");
});

router.get("/new", (req, res) => {
  res.send("User new");
});

module.exports = router;
