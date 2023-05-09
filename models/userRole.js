const mongoose = require("mongoose");

const userRoleSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  role: { type: String, required: true },
});

const UserRole = mongoose.model("UserRole", userRoleSchema);

module.exports = UserRole;
