const express = require("express");
const controller = require("../controller/Cindex");
const router = express.Router();

router.get("/", controller.index);
router.post("/login", controller.login);

module.exports = router;
