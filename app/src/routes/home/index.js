"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//route경로로 요청. 슬래시는 루트를 의미함.
router.get("/",ctrl.home);
router.get("/login",ctrl.login);

module.exports = router;