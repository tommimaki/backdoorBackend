"use strict";

var express = require("express");
var router = express.Router();
var saleController = require("../controllers/saleController");
router.get("/sales", saleController.getAllSales);
router.get("/sales/:id", saleController.getSaleById);
router.post("/sales", saleController.createSale);
router.put("/sales/:id", saleController.updateSale);
router["delete"]("/sales/:id", saleController.deleteSale);
router.get("/apartments", saleController.getAllApartments);
router.get("/apartment/:apartmentId", saleController.getApartmentById);
module.exports = router;