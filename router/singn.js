const express = require("express");
const controller = require("../controller/Csingn");
const router = express.Router();

router.get("/", controller.singn);

module.exports = router;
