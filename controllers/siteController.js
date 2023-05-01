// controllers/siteController.js
const Site = require("../models/Site");

exports.getAllSites = async (req, res) => {
  try {
    const sites = await Site.find({});
    res.json(sites);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sites" });
  }
};
