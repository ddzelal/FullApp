const express = require("express");
const router = express.Router();

router.get("/", require("../controllers/advisor/advisorController"));
router.get("/terms/:id", require("../controllers/advisor/showTermsController"));

module.exports = router;
