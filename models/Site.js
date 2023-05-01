// models/Site.js
const mongoose = require("mongoose");

const siteSchema = new mongoose.Schema({
  title: String,
  description: String,
  images: [String],
  address: String,
  finishingDate: Date,
  location: String,
  numberOfApartments: Number,
});

const Site = mongoose.model("Site", siteSchema);

module.exports = Site;
