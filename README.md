# 📝 Blog App – Backend API

A robust and scalable RESTful API for a blogging platform. Built with **Node.js**, **Express**, and **MongoDB**, this backend supports user authentication, post management, and comment handling—perfect for powering modern web/blog applications.

---

## 🔧 Features

- 🔐 **User Auth**: Registration and login with JWT-based authentication  
- 📝 **Posts**: Create, read, update, and delete blog posts  
- 💬 **Comments**: Add and manage comments on posts  
- 🛡️ **Validation & Error Handling**: Clean handling of invalid requests and errors  
- 🧱 **Secure Passwords**: Hashed using bcrypt  
- 📁 **Modular Code Structure**: Controllers, routes, models, and middleware separated for clarity

---

## 🚀 Tech Stack

| Component       | Tech Used              |
|----------------|------------------------|
| Runtime         | Node.js                |
| Web Framework   | Express.js             |
| Database        | MongoDB + Mongoose     |
| Authentication | JWT + bcrypt           |
| Env Config      | dotenv                 |

---

🧪 API Endpoints

Auth

- POST /api/auth/register – Register a new user

- POST /api/auth/login – Authenticate user & receive JWT

Posts

- GET /api/posts – List all posts

- GET /api/posts/:id – Get single post

- POST /api/posts – Create a post (requires auth)

- PUT /api/posts/:id – Update a post (requires auth & ownership)

- DELETE /api/posts/:id – Delete a post (requires auth & ownership)
