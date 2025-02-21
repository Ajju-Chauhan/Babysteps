import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchDoctors = async () => {
  try {
    const response = await api.get("/doctors");
    return response.data;
  } catch (error) {
    console.error("Error fetching doctors:", error);
    throw error;
  }
};

export const fetchAvailableSlots = async (doctorId, date) => {
  try {
    const response = await api.get(`/doctors/${doctorId}/slots?date=${date}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching slots:", error);
    throw error;
  }
};

export const bookAppointment = async (appointmentData) => {
  try {
    await api.post("/appointments", appointmentData);
    alert("Appointment booked successfully!");
  } catch (error) {
    console.error("Error booking appointment:", error);
    throw error;
  }
};
