// routes/newsletterRoutes.js

const express = require("express");
const router = express.Router();
const newsletterController = require("../controllers/newsletterController");

router.post("/subscribe", newsletterController.createSubscription);
router.get("/newsletter", newsletterController.getAllSubscriptions);
router.get("newsletter/:id", newsletterController.getSubscription);
router.delete("newsletter/:id", newsletterController.deleteSubscription);

module.exports = router;
