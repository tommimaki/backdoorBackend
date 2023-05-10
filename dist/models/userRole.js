"use strict";

var mongoose = require("mongoose");
var userRoleSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});
var UserRole = mongoose.model("UserRole", userRoleSchema);
module.exports = UserRole;