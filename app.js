require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const siteRoutes = require("./routes/siteRoutes");
const saleRoutes = require("./routes/saleRoutes");
const newsletterRoutes = require("./routes/newsletterRoutes");
const s3Route = require("./routes/s3Route");

const app = express();
app.use(cors());
app.use(express.json());

const url = process.env.MONGO_DB_URI;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
app.use("/api", siteRoutes);
app.use("/api", saleRoutes);
app.use("/api", newsletterRoutes);
app.use("/api", s3Route);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
