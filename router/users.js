const express = require("express");
const router = express.Router();
var expressLayouts = require("express-ejs-layouts");
// api
// router.get("/api/user/:id", (req, res) => {
//   res.send(`Test`);
// });
router.get("/", (req, res) => {
  res.render("pages/frontend/index.ejs");
});
const port = 3000;

module.exports = router;
