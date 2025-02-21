const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// GET /api/appointments - Retrieve all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find().populate("doctorId");
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// POST /api/appointments - Create a new appointment
router.post("/", async (req, res) => {
  const { doctorId, date, duration, appointmentType, patientName, notes } = req.body;

  try {
    // Create the appointment
    const newAppointment = new Appointment({
      doctorId,
      date,
      duration,
      appointmentType,
      patientName,
      notes,
    });

    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(500).json({ message: "Error creating appointment" });
  }
});

module.exports = router;
