"use strict";

// routes/siteRoutes.js
var express = require("express");
var router = express.Router();
var siteController = require("../controllers/siteController");
router.get("/sites", siteController.getAllSites);
router.get("/sites/:id", siteController.getSiteById);
router.post("/sites", siteController.createSite);
router.put("/sites/:id", siteController.updateSite);
router["delete"]("/sites/:id", siteController.deleteSite);
module.exports = router;