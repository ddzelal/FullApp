const express = require("express");
const router = express.Router();

router.get("/", require("../controllers/admin/adminController"));

router.get("/create-city", (req, res) => {
  res.render("admin/createCity");
});

router.get("/create-product", (req, res) => {
  res.render("admin/createProduct");
});

router.get("/create", (req, res) => {
  res.render("admin/adminCreateForm");
});

router.post("/create/city/save", require("../controllers/admin/createCity"));

router.post(
  "/create/product/save",
  require("../controllers/admin/createProduct")
);

router.get(
  "/delete/user/:userId",
  require("../controllers/admin/deleteUserController")
);

router.post("/create/save", require("../controllers/admin/saveController"));
module.exports = router;
