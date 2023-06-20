"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//route경로로 요청. 슬래시는 루트를 의미함.
router.get("/",ctrl.output.home);
router.get("/login",ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login",ctrl.process.login);
router.post("/register",ctrl.process.register);

module.exports = router;