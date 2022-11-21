const express = require("express");
const router = express.Router();

router.get("/", require("../controllers/advisor/advisorController"));

module.exports = router;
