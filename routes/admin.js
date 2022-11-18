const express = require("express");
const router = express.Router();

router.get("/", require("../controllers/admin/adminController"));

router.get("/create", (req, res) => {
  res.render("admin/adminCreateForm");
});

router.get("/create/city", (req, res) => {
  res.render("admin/createCity");
});

router.post("/create/save", require("../controllers/admin/saveController"));
module.exports = router;
