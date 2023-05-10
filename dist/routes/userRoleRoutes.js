"use strict";

var express = require("express");
var router = new express.Router();
var userRoleController = require("../controllers/userRoleController");
router.get("/userRole/:uid", userRoleController.getUserRoleByUid);
module.exports = router;