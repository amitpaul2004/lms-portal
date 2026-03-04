# 🚀 LearnFlow – Online Learning Management System (LMS)

![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-blue?logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-yellow)

> A modern **Learning Management System (LMS)** with authentication, course enrollment, dashboard analytics, and cloud database integration.

---

# 🌐 Live Preview

```
lms-portal-84cx.onrender.com
```

---

# 📚 Features

✨ Modern LMS Landing Page  
✨ User Authentication (Signup / Login)  
✨ Secure Password Encryption  
✨ Course Enrollment System  
✨ Student Dashboard  
✨ MongoDB Cloud Database  
✨ Animated UI & Micro-Interactions  
✨ Profile Dropdown with Logout  
✨ Responsive Design  
✨ Dashboard Analytics  

---

# 🖥️ Tech Stack

| Technology | Usage |
|------------|-------|
| **Node.js** | Backend Server |
| **Express.js** | API Routing |
| **MongoDB Atlas** | Cloud Database |
| **Mongoose** | Database Models |
| **Bootstrap 5** | UI Framework |
| **JavaScript** | Frontend Logic |
| **Particles.js** | Animated Background |

---

# 📂 Project Structure
 ``` tree

 lms-portal
│
├── models
│ ├── User.js
│ └── Enrollment.js
│
├── public
│ ├── img
│ ├── login
│ │ ├── login.html
│ │ └── signup.html
│ │
│ ├── dashboard
│ │ └── dashboard.html
│ │
│ ├── style.css
│ ├── script.js
│ └── index.html
│
├── node_modules
├── package.json
└── server.js

```


---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/lms-portal.git
cd lms-portal

```
Install dependencies

```
npm install
```

Start the server

```
node server.js
```

Open browser

```
http://localhost:3000
```

---

🗄️ Database Setup (MongoDB Atlas)

1️⃣ Create account on MongoDB Atlas

2️⃣ Create a cluster

3️⃣ Add IP address
```
0.0.0.0/0
```
4️⃣ Create database user
```
username: lmsuser
password: lms12345
```
5️⃣ Replace connection string in server.js
```
mongoose.connect("mongodb+srv://lmsuser:lms12345@cluster.mongodb.net/learnflow")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));
```

---

🎓 LMS Dashboard Features
```tree
✔ Courses Enrolled Counter
✔ Hours Learned Tracker
✔ Certificates Earned
✔ Learning Streak
✔ Continue Learning Section
✔ User Profile Dropdown
```
---

🔐 Authentication System
```tree
The system includes:

• Signup with encrypted password
• Login authentication
• Session management
• Protected course enrollment
```
---

🚀 Deployment

You can deploy using:
```tree
• Render – Backend hosting
• MongoDB Atlas – Database
• GitHub – Version control
```
---

👨‍💻 Author

Amit Paul

AI Developer | Data Science Enthusiast | Web Developer

GitHub
https://github.com/yourusername

LinkedIn
https://linkedin.com/in/yourprofile

---

⭐ Support
```tree
If you like this project:

⭐ Star the repository
🍴 Fork it
🚀 Build your own LMS
```
## 🎋 ER Diagram 

```mermaid
erDiagram

USER {
    string _id
    string name
    string email
    string password
}

COURSE {
    string _id
    string courseName
    string instructor
    int duration
}

ENROLLMENT {
    string _id
    string userId
    string courseId
    date enrolledAt
}

USER ||--o{ ENROLLMENT : enrolls
COURSE ||--o{ ENROLLMENT : contains
```

---

### What this ER Diagram shows

**USER**
- `_id`
- `name`
- `email`
- `password`

**COURSE**
- `_id`
- `courseName`
- `instructor`
- `duration`

**ENROLLMENT**
- `_id`
- `userId`
- `courseId`
- `enrolledAt`

Relationships:
- One **User** can enroll in **many Courses**
- One **Course** can have **many Users**

---

