const express = require("express");
const mongoose = require("mongoose");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const cors = require("cors");

const app = express();


// Allow CORS for all origins
app.use(cors());

app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/babysteps", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);

// Start the server
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



