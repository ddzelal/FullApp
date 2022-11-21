const express = require("express");
const router = express.Router();

router.use(checkAdmin);

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

router.get(
  "/delete/product/:productId",
  require("../controllers/admin/deleteProductController")
);
router.get(
  "/delete/city/:cityId",
  require("../controllers/admin/deleteCityController")
);

function checkAdmin(req, res, next) {
  let user = req.session.user;
  if (user) {
    if (user.role == "admin") {
      next();
    } else {
      res.redirect("/");
    }
  } else {
    res.redirect("/");
  }
}

router.post("/create/save", require("../controllers/admin/saveController"));
module.exports = router;
