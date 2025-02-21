const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");

// GET /api/doctors - Retrieve all doctors
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// GET /api/doctors/:id/slots?date=YYYY-MM-DD - Get available slots for a doctor
router.get("/:id/slots", async (req, res) => {
  const { date } = req.query;
  const doctorId = req.params.id;

  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });

    // Calculate available slots (logic to be added)
    // Placeholder: Return all working hours as available slots
    const availableSlots = ["09:00", "09:30", "10:00"]; // Example slots
    res.json(availableSlots);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// POST /api/doctors - Add a new doctor
router.post("/", async (req, res) => {
  const { name, specialization, workingHours } = req.body;

  if (!name || !specialization || !workingHours) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newDoctor = new Doctor({ name, specialization, workingHours });
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});


module.exports = router;
