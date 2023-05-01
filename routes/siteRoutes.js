// routes/siteRoutes.js
const express = require("express");
const router = express.Router();
const siteController = require("../controllers/siteController");

router.get("/sites", siteController.getAllSites);

module.exports = router;
