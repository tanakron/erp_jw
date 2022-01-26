// Import Express
const express = require("express");

const router = express.Router();

router.get("", (req, res) => {
  res.render("pages/frontend/index", { title: "หน้าหลัก" });
});

module.exports = router;
