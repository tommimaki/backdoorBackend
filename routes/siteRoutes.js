// routes/siteRoutes.js
const express = require("express");
const router = express.Router();
const siteController = require("../controllers/siteController");

router.get("/api/sites", siteController.getAllSites);

module.exports = router;
