const express = require("express");
const router = express.Router();
const { register, login, checkUser } = require("../Controller/userContoler");

router.post("/register", register);
router.post("/login", login);

//check user
router.get("/check", checkUser);

module.exports = router;
