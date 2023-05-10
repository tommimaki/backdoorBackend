const mongoose = require("mongoose");

const ApartmentSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: String,
  area: Number,
  floor: Number,
  sellingPrice: Number,
  debtFreePrice: Number,
  maintenanceFee: Number,
  images: [{ type: String }],
});

const SaleSchema = new mongoose.Schema({
  title: String,
  description: String,
  images: [String],
  apartments: [ApartmentSchema],
  location: String,
  address: String,
  buildingType: String,
  floors: Number,
  numberOfApartments: Number,
});

const Sale = mongoose.model("Sale", SaleSchema);

module.exports = Sale;
