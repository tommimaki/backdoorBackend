const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  title: String,
  description: String,
  images: [String],
  address: String,
  location: String,
  apartments: [{}],
});

const Sale = mongoose.model("Sale", saleSchema);

module.exports = Sale;
