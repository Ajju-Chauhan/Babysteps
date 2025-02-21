import React, { useState } from "react";
import DoctorList from "./components/DoctorList";
import AppointmentBooking from "./components/AppointmentBooking";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import 'animate.css'; // Import Animate.css for animations

const App = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="display-4 animate__animated animate__fadeInDown">
          Appointment Booking System
        </h1>
      </div>

      {!selectedDoctor && (
        <div className="card shadow-sm p-4 animate__animated animate__fadeInLeft">
          <DoctorList onSelectDoctor={setSelectedDoctor} />
        </div>
      )}

      {selectedDoctor && (
        <div className="card shadow-sm p-4 animate__animated animate__fadeInRight">
          <AppointmentBooking doctor={selectedDoctor} />
        </div>
      )}
    </div>
  );
};

export default App;
