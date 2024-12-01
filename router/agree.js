const express = require("express");
const controller = require("../controller/agree");
const router = express.Router();

router.get("/agree", controller.agree);

module.exports = router;
