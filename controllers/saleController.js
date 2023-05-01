const Sale = require("../models/Sale");

exports.getAllSales = async (req, res) => {
  try {
    const sales = await Sale.find({});
    res.json(sales);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sales" });
  }
};
exports.getSaleById = async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id);
    if (sale) {
      res.json(sale);
    } else {
      res.status(404).json({ error: "Sale not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sale" });
  }
};
