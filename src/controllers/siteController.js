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

exports.createSite = async (req, res) => {
  try {
    const site = new Site(req.body);
    await site.save();
    res.status(201).json(site);
  } catch (error) {
    res.status(500).json({ error: "Failed to create site" });
  }
};

exports.updateSite = async (req, res) => {
  try {
    const updatedSite = await Site.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedSite) {
      res.status(404).json({ error: "Site not found" });
    } else {
      res.json(updatedSite);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update site" });
  }
};

exports.deleteSite = async (req, res) => {
  try {
    const deletedSite = await Site.findByIdAndDelete(req.params.id);
    if (!deletedSite) {
      res.status(404).json({ error: "Site not found" });
    } else {
      res.json({ message: "Site deleted", _id: deletedSite._id });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete site" });
  }
};
