const Sale = require("../models/Sale");

exports.getAllSales = async (req, res) => {
  try {
    const sales = await Sale.find({});
    res.json(sales);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sales" });
  }
};
