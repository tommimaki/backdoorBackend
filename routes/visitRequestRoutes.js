const express = require("express");
const router = new express.Router();
const visitRequestController = require("../controllers/visitRequestController");

router.post("/visit-requests", visitRequestController.createVisitRequest);
router.get("/visit-requests", visitRequestController.getVisitRequests);
router.get("/visit-requests/:id", visitRequestController.getVisitRequestById);
router.patch("/visit-requests/:id", visitRequestController.updateVisitRequest);
router.delete("/visit-requests/:id", visitRequestController.deleteVisitRequest);

module.exports = router;
