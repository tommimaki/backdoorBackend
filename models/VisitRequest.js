const mongoose = require("mongoose");

const visitRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, required: true, default: "pending" },
});

const VisitRequest = mongoose.model("VisitRequest", visitRequestSchema);

module.exports = VisitRequest;
