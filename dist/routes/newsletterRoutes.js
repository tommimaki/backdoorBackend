"use strict";

// routes/newsletterRoutes.js

var express = require("express");
var router = express.Router();
var newsletterController = require("../controllers/newsletterController");
router.post("/newsletter/subscribe", newsletterController.createSubscription);
router.get("/newsletter", newsletterController.getAllSubscriptions);
router.get("/newsletter/:id", newsletterController.getSubscription);
router["delete"]("/newsletter/:id", newsletterController.deleteSubscription);
module.exports = router;