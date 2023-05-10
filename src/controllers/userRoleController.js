const UserRole = require("../models/userRole");

// Get user role by UID
exports.getUserRoleByUid = async (req, res) => {
  try {
    const uid = req.params.uid;
    if (!uid) {
      return res.status(400).json({ message: "UID is required" });
    }

    const userRole = await UserRole.findOne({ uid: uid });

    if (userRole) {
      res.status(200).json({ role: userRole.role });
    } else {
      res.status(404).json({ message: "User role not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
