// routes/siteRoutes.js
const express = require("express");
const router = express.Router();
const siteController = require("../controllers/siteController");

router.get("/sites", siteController.getAllSites);
router.get("/sites/:id", siteController.getSiteById);

module.exports = router;
