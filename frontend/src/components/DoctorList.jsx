import React, { useEffect, useState } from "react";
import { fetchDoctors } from "./services/api.jsx";
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';


const DoctorList = ({ onSelectDoctor }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDoctors = async () => {
      try {
        const data = await fetchDoctors();
        setDoctors(data);
      } catch (error) {
        console.error("Error loading doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDoctors();
  }, []);

  if (loading) return <p>Loading doctors...</p>;

  return (
    <div>
      <h2>Select a Doctor</h2>
      <ul className="list-group">
        {doctors.map((doctor) => (
          <li
            key={doctor._id}
            className="list-group-item list-group-item-action"
            onClick={() => onSelectDoctor(doctor)}
            style={{ cursor: "pointer" }}
          >
            {doctor.name} ({doctor.specialization})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
