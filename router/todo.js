const express = require("express");
const controller = require("../controller/Ctodo");
const router = express.Router();

router.get("/todo", controller.todo);
router.post("/todo", controller.todo);
module.exports = router;
