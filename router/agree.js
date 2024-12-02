const express = require("express");
const controller = require("../controller/Cagree");
const router = express.Router();

router.get("/agree", controller.agree);
router.post("/is_agree", controller.isagree);

module.exports = router;
