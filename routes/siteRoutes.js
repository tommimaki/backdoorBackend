// routes/siteRoutes.js
const express = require("express");
const router = express.Router();
const siteController = require("../controllers/siteController");

router.get("/sites", siteController.getAllSites);
router.get("/sites/:id", siteController.getSiteById);
router.post("/sites", siteController.createSite);
router.put("/sites/:id", siteController.updateSite);
router.delete("/sites/:id", siteController.deleteSite);

module.exports = router;
