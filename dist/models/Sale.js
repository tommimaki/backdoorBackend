"use strict";

var mongoose = require("mongoose");
var ApartmentSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: String,
  area: Number,
  floor: Number,
  sellingPrice: Number,
  debtFreePrice: Number,
  maintenanceFee: Number,
  images: [{
    type: String
  }]
});
var SaleSchema = new mongoose.Schema({
  title: String,
  description: String,
  images: [String],
  apartments: [ApartmentSchema],
  location: String,
  address: String,
  buildingType: String,
  floors: Number,
  numberOfApartments: Number
});
var Sale = mongoose.model("Sale", SaleSchema);
module.exports = Sale;