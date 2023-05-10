"use strict";

// models/newsletter.js

var mongoose = require("mongoose");
var newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
var Newsletter = mongoose.model("Newsletter", newsletterSchema);
module.exports = Newsletter;