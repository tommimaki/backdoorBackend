const express = require("express");
const router = new express.Router();
const userRoleController = require("../controllers/userRoleController");

router.get("/userRole/:uid", userRoleController.getUserRoleByUid);

module.exports = router;
