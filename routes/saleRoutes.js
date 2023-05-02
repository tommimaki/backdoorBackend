const express = require("express");
const router = express.Router();
const saleController = require("../controllers/saleController");

router.get("/sales", saleController.getAllSales);
router.get("/sales/:id", saleController.getSaleById);
router.get("/apartments", saleController.getAllApartments);
router.get("/apartment/:apartmentId", saleController.getApartmentById);
module.exports = router;
