# Babysteps
# Babysteps Appointment Booking System

## 🚀 Overview

The **Babysteps Appointment Booking System** is a full-stack web application designed for prenatal care services. Users can view a doctor's available time slots and book appointments accordingly. This system prevents double bookings by computing available appointment slots based on predefined working hours and existing appointments.

## 🛠️ Technologies Used
- **Frontend:** React.js ⚛️
- **Backend:** Node.js + Express.js 🟢
- **Database:** MongoDB 🍃
- **Hosting:** Backend deployed on **Render** ☁️, Frontend on **Vercel** 🌍

## 📌 Features
- View a list of doctors 🩺
- Check available appointment slots 📅
- Book an appointment ✍️
- Prevent double booking 🚫
- Real-time updates using WebSockets (optional) 🔄

## 🔧 Installation & Running the Project

### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/Ajju-Chauhan/Babysteps.git
```

### 2️⃣ Navigate to the Project Directory
```sh
 cd Babysteps
```

### 3️⃣ Install Dependencies
#### Backend:
```sh
 cd backend
 npm install
```
#### Frontend:
```sh
 cd frontend
 npm install
```

### 4️⃣ Run the Project
#### Backend:
```sh
 npm start
```
#### Frontend:
```sh
 npm start
```

## 🌍 Live Deployment
- **Frontend:** [BabySteps App](https://baby-steps-two.vercel.app/) 🔗
- **GitHub Repo:** [View on GitHub](https://github.com/Ajju-Chauhan/Babysteps) 📝

## 📜 Assumptions & Design Decisions
- The application does **not** include user authentication 🚪
- Appointments are scheduled at **fixed intervals** (e.g., 30-minute slots) ⏳
- Error handling is implemented for invalid inputs ❗
- UI is kept minimal but intuitive 🎨

## 📢 Additional Enhancements (Future Scope)
- 📡 Real-time updates for slot availability
- 🗓️ Enhanced calendar UI
- ✅ Improved validation & error messages


