# 🧑‍💻 Student Team Members Management Application

A full-stack MERN application for managing student team members — built as part of the **FSD CLAT-2 Online Assessment** (2024-25 Even Semester) at SRM Institute of Science and Technology.

---

## 📌 Features

- ✅ Add new team members with image upload  
- ✅ View all team members in a list layout  
- ✅ View individual member details  
- ✅ Backend built using Node.js, Express, and MongoDB  
- ✅ Frontend built using React.js  
- ✅ Clean, responsive UI using basic CSS  

---

## 📁 Folder Structure

```
student-team-management/
├── client/        # React frontend
├── server/        # Express + Node backend
│   ├── uploads/   # Profile images
│   ├── models/    # Mongoose schema
│   ├── routes/    # Express API routes
│   ├── .env       # Environment variables
```

---

## ⚙️ Installation Steps

> 💡 Prerequisite: MongoDB must be installed and running locally (or MongoDB Atlas)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd student-team-management
```

### 2. Start the backend

```bash
cd server
npm install
cp .env.example .env  # create a .env file and add Mongo URI
npm start
```

### 3. Start the frontend

```bash
cd client
npm install
npm start
```

---

## 🌐 API Endpoints

### POST `/api/members`

Add a new member  
**FormData**: `name`, `role`, `email`, `image`

### GET `/api/members`

Fetch all members

### GET `/api/members/:id`

Fetch single member by ID

---

## 🧪 Testing API via Browser

You can test GET APIs directly:

- http://localhost:5000/api/members
- http://localhost:5000/api/members/<id>

---

## 👥 Team Name

**Team Phoenix**  
_Members: [Your Names Here]_

---

## 📦 .gitignore Example

```
node_modules/
uploads/
.env
```

---

