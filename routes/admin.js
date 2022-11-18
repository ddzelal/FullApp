const express = require("express");
const router = express.Router();

router.get("/", require("../controllers/admin/adminController"));

router.get("/create", (req, res) => {
  res.render("admin/adminCreateForm");
});

module.exports = router;
