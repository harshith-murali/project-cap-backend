# Project Camp Backend

A **Node.js + Express backend API** for a Project Management application.
This project implements a **complete authentication system** including registration, email verification, JWT authentication, password reset, and token refresh mechanisms.

---

# Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (JSON Web Tokens)**
- **Zod** for request validation
- **Mailgen + Nodemailer** for transactional emails

---

# Features

- User Registration
- Email Verification
- Login / Logout
- JWT Authentication
- Refresh Token Flow
- Get Current Logged-in User
- Change Password
- Forgot Password (email reset link)
- Reset Password via secure token
- Resend Email Verification
- Health Check Routes

---

# Installation

Clone the repository

```bash
git clone https://github.com/your-username/project-camp-backend.git
cd project-camp-backend
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

# Environment Variables

Create a `.env` file in the root directory.

Example:

```env
PORT=8000

MONGODB_URI=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=15m

REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=7d

SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```

---

# API Endpoints

Base URL

```
http://localhost:8000/api/v1/auth
```

---

## Authentication Routes

### Register User

POST `/register`

Request body

```json
{
  "email": "test@gmail.com",
  "username": "test",
  "password": "abc123"
}
```

---

### Login User

POST `/login`

```json
{
  "email": "test@gmail.com",
  "password": "abc123"
}
```

Returns **access token and refresh token**

---

### Logout User

POST `/logout`

Headers

```
Authorization: Bearer <accessToken>
```

---

### Get Current User

GET `/current-user`

Headers

```
Authorization: Bearer <accessToken>
```

---

### Verify Email

GET `/verify-email/:verificationToken`

This route is accessed through the verification link sent to the user’s email.

---

### Resend Email Verification

POST `/resend-verification-email`

Headers

```
Authorization: Bearer <accessToken>
```

---

### Refresh Access Token

POST `/refresh-token`

Used when the access token expires.

---

### Change Password

POST `/change-password`

Headers

```
Authorization: Bearer <accessToken>
```

Body

```json
{
  "currentPassword": "abc123",
  "newPassword": "NewPass123"
}
```

---

### Forgot Password

POST `/forgot-password`

```json
{
  "email": "test@gmail.com"
}
```

An email containing a password reset link will be sent.

---

### Reset Password

POST `/reset-password/:resetToken`

```json
{
  "newPassword": "newpassword123"
}
```

---

# Health Check Routes

These routes are used to verify if the server is running.

GET `/`

GET `/instagram`

---

# Authentication Flow

```
Register User
      ↓
Email Verification
      ↓
Login
      ↓
Access Token + Refresh Token
      ↓
Protected Routes (JWT)
      ↓
Refresh Token when Access Token expires
```

---

# Postman Collection

You can test all API routes using the Postman collection located in the repository.

```
postman/project-camp-backend.postman_collection.json
```

Import the collection into Postman and set the environment variable:

```
url = http://localhost:8000
```

---

# Author

Harshith

Backend built as part of the **Project Camp backend system** focusing on authentication, validation, and secure API design.
