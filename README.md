# 🧩 Task Manager API

A simple yet powerful task management RESTful API built with Node.js, Express, and MongoDB.  
Supports full user authentication with JWT, task creation and management per user, and secure route protection.

---

## 🚀 Features

- 🔐 User registration and login (with password hashing via `bcryptjs`)
- 🔑 JWT authentication with middleware protection for private routes
- ✅ Full CRUD functionality for tasks:
  - Create
  - Read (all or filtered)
  - Update
  - Delete
- 📌 Each task is linked to the authenticated user (`owner`)
- 🌐 MongoDB Atlas for cloud database hosting
- 🧪 Postman used for API testing

---

## 🛠 Tech Stack

- **Node.js** – server-side runtime
- **Express.js** – web framework
- **MongoDB** & **Mongoose** – database and schema modeling
- **JWT** – authentication via token
- **bcryptjs** – secure password hashing
- **dotenv** – environment variable management
- **Postman** – API development and testing

---

## 📦 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/lidor7776/task-manager-api.git
cd task-manager-api
```
