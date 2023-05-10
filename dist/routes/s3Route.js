"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../controllers/imageController"),
  handleImageUpload = _require.handleImageUpload;
router.post("/image-upload", handleImageUpload);
module.exports = router;