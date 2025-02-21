import React, { useEffect, useState } from "react";
import { fetchAvailableSlots, bookAppointment } from "./services/api";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const AppointmentBooking = ({ doctor }) => {
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [appointmentType, setAppointmentType] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const loadSlots = async () => {
      if (date) {
        try {
          const availableSlots = await fetchAvailableSlots(doctor._id, date);
          setSlots(availableSlots);
        } catch (error) {
          console.error("Error loading slots:", error);
        }
      }
    };

    loadSlots();
  }, [date, doctor]);

  const handleBooking = async () => {
    const appointmentData = {
      doctorId: doctor._id,
      date,
      duration: 30,
      appointmentType,
      patientName,
      notes,
    };

    try {
      await bookAppointment(appointmentData);
      alert("Appointment booked successfully!");
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Book an Appointment with Dr. {doctor.name}</h2>
      
      <div className="mb-3">
        <label className="form-label">Select Date:</label>
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <h3 className="mt-4">Available Slots</h3>
      <ul className="list-group">
        {slots.map((slot, index) => (
          <li
            key={index}
            className={`list-group-item ${selectedSlot === slot ? "active" : ""}`}
            onClick={() => setSelectedSlot(slot)}
            style={{ cursor: "pointer" }}
          >
            {slot} {selectedSlot === slot && "(Selected)"}
          </li>
        ))}
      </ul>

      <h3 className="mt-4">Appointment Details</h3>
      <div className="mb-3">
        <label className="form-label">Patient Name:</label>
        <input
          type="text"
          className="form-control"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Appointment Type:</label>
        <input
          type="text"
          className="form-control"
          value={appointmentType}
          onChange={(e) => setAppointmentType(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Notes:</label>
        <textarea
          className="form-control"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleBooking}>
        Book Appointment
      </button>
    </div>
  );
};

export default AppointmentBooking;
