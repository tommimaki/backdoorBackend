const VisitRequest = require("../models/VisitRequest");

// Create and store a new visit request
exports.createVisitRequest = async (req, res) => {
  try {
    const visitRequest = new VisitRequest(req.body);
    await visitRequest.save();
    res.status(201).send(visitRequest);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all visit requests
exports.getVisitRequests = async (req, res) => {
  try {
    const visitRequests = await VisitRequest.find();
    res.status(200).send(visitRequests);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a visit request by ID
exports.getVisitRequestById = async (req, res) => {
  try {
    const visitRequest = await VisitRequest.findById(req.params.id);
    if (!visitRequest) {
      return res.status(404).send({ message: "Visit request not found" });
    }
    res.status(200).send(visitRequest);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateVisitRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const visitRequest = await VisitRequest.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!visitRequest) {
      return res.status(404).send("Visit request not found");
    }

    res.send(visitRequest);
  } catch (error) {
    res.status(500).send("Error updating visit request: " + error.message);
  }
};

// Delete a visit request by ID
exports.deleteVisitRequest = async (req, res) => {
  try {
    const visitRequest = await VisitRequest.findByIdAndDelete(req.params.id);
    if (!visitRequest) {
      return res.status(404).send({ message: "Visit request not found" });
    }
    res
      .status(200)
      .send({ message: "Visit request successfully deleted", visitRequest });
  } catch (error) {
    res.status(500).send(error);
  }
};
