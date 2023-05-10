"use strict";

// models/Site.js
var mongoose = require("mongoose");
var siteSchema = new mongoose.Schema({
  title: String,
  description: String,
  images: [String],
  address: String,
  finishingDate: Date,
  location: String,
  numberOfApartments: Number
});
var Site = mongoose.model("Site", siteSchema);
module.exports = Site;