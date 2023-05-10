"use strict";

require("dotenv").config();
var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var siteRoutes = require("./routes/siteRoutes");
var saleRoutes = require("./routes/saleRoutes");
var newsletterRoutes = require("./routes/newsletterRoutes");
var s3Route = require("./routes/s3Route");
var visitRequestRoute = require("./routes/visitRequestRoutes");
var userRoleRoute = require("./routes/userRoleRoutes");
var app = express();
app.use(cors());
app.use(express.json());
var url = process.env.MONGO_DB_URI;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use("/api", siteRoutes);
app.use("/api", saleRoutes);
app.use("/api", newsletterRoutes);
app.use("/api", s3Route);
app.use("/api", visitRequestRoute);
app.use("/api", userRoleRoute);
var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});