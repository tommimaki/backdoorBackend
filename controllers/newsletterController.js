// controllers/newsletterController.js

const Newsletter = require("../models/Newsletter");

exports.createSubscription = async (req, res) => {
  try {
    const subscription = new Newsletter(req.body);
    await subscription.save();
    res
      .status(201)
      .json({ message: "Subscription created successfully", subscription });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Newsletter.find({});
    res.status(200).json(subscriptions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSubscription = async (req, res) => {
  try {
    const subscription = await Newsletter.findById(req.params.id);
    if (!subscription)
      return res.status(404).json({ error: "Subscription not found" });
    res.status(200).json(subscription);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteSubscription = async (req, res) => {
  try {
    const subscription = await Newsletter.findByIdAndDelete(req.params.id);
    if (!subscription)
      return res.status(404).json({ error: "Subscription not found" });
    res.status(200).json({ message: "Subscription deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
