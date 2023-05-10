"use strict";

var express = require("express");
var router = new express.Router();
var visitRequestController = require("../controllers/visitRequestController");
router.post("/visit-requests", visitRequestController.createVisitRequest);
router.get("/visit-requests", visitRequestController.getVisitRequests);
router.get("/visit-requests/:id", visitRequestController.getVisitRequestById);
router.patch("/visit-requests/:id", visitRequestController.updateVisitRequest);
router["delete"]("/visit-requests/:id", visitRequestController.deleteVisitRequest);
module.exports = router;