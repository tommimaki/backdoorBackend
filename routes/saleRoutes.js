const express = require("express");
const router = express.Router();
const saleController = require("../controllers/saleController");

router.get("/sales", saleController.getAllSales);
router.get("/sales/:id", saleController.getSaleById);
module.exports = router;
