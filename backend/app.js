require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const cors = require("cors");

const app = express();

// Allow CORS for all origins
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGODB_URI; // Ensure this is set in environment variables

if (!MONGO_URI) {
  console.error("Error: Missing MONGO_URI. Set it in environment variables.");
  process.exit(1); // Exit the application if URI is missing
}

mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Routes
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);

// Start the server
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
