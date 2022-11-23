const express = require("express");
const router = express.Router();

router.use(checkAdvisor);

router.get("/", require("../controllers/advisor/advisorController"));
router.get("/:id", require("../controllers/advisor/showTermsController"));

router.post("/notice/:id", require("../controllers/advisor/noticeController"));

function checkAdvisor(req, res, next) {
  let user = req.session.user;
  if (user) {
    if (user.role == "advisors") {
      next();
    } else {
      res.redirect("/");
    }
  } else {
    res.redirect("/");
  }
}

module.exports = router;
