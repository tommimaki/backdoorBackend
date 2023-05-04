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

exports.getSiteById = async (req, res) => {
  try {
    const site = await Site.findById(req.params.id);
    if (!site) {
      res.status(404).json({ error: "Site not found" });
    } else {
      res.json(site);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch site" });
    console.log(error);
  }
};
