const express = require("express");
const router = express.Router();

router.get("/", require("../controllers/operator/operatorController"));
router.post("/newTerms", require("../controllers/operator/newTermsController"));

module.exports = router;
