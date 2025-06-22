# 🛡️ Authentication API Documentation

A simple and efficient authentication API built with Node.js. This API provides secure endpoints for user registration, login, token verification, and logout.

---

## 🚀 Setup Guide

Follow these steps to get the application up and running locally:

```bash
# 1. Clone or pull the latest code
git pull

# 2. Navigate to the backend directory
cd backend

# 3. Install all dependencies
npm install

# 4. Start the development server
npm run dev
```

> ✅ If you see:
> **"Server is running on port 3000"**,
> then the project is up and running, and you're ready to use the endpoints below.

---

## 🔐 Auth Endpoints

### 📩 Register User

- **Endpoint:** `POST http://localhost:3000/api/v1/auth/register`

#### ✅ Request Body

```json
{
  "schoolName": "Ack All Saints",
  "county": "Nandi",
  "email": "allsaints@gmail.com",
  "password": "12345678"
}
```

#### 📤 Response Body

```json
{
  "message": "Registration successful. Please proceed to login."
}
```

---

### 🔑 Login User

- **Endpoint:** `POST http://localhost:3000/api/v1/auth/login`

#### ✅ Request Body

```json
{
  "schoolName": "Ack All Saints",
  "county": "Nandi",
  "email": "allsaints@gmail.com",
  "password": "12345678"
}
```

#### 📤 Response Body

```json
{
  "message": "Login successful"
}
```

> 💡 On success, a JWT token is stored in an **HTTP-only cookie**.

---

### 🔍 Verify Token

- **Endpoint:** `POST http://localhost:3000/api/v1/auth/verify-token`

#### 📤 Response Body

```json
{
  "userId": "b27b9c8e-91cf-4c36-b59a-f9a6a3a9f9ff"
}
```

> ⚠️ _This endpoint assumes that the token is sent via cookies. If you’re using Postman or HTTPie, ensure cookies are included._

---

### 🚪 Logout User

- **Endpoint:** `GET http://localhost:3000/api/v1/auth/logout`

#### ❌ Request Body

No body required.

#### 📤 Response Body

```json
{
  "message": "Logout successful"
}
```

> 💡 This endpoint clears the authentication cookie, effectively logging the user out.

---

## 📌 Notes

- All requests should be made using `Content-Type: application/json`.
- JWT tokens are stored securely in HTTP-only cookies to protect against XSS attacks.
- Secure cookie flag is set to `true` in production (`process.env.NODE_ENV === "production"`).
- Ensure your `.env` contains the correct `JWT_SECRET` and `PORT` variables.

---

## 🛠️ Tech Stack

- **Node.js** + **Express**
- **TypeScript**
- **JWT** for token-based auth
- **Drizzle ORM** (or your DB layer)
- **HTTP-only cookies** for secure sessions

---

## 🧚️‍♂️ Testing Endpoints

Use tools like **Postman**, **Insomnia**, or **HTTPie** with session or cookie support enabled to test protected endpoints.

---

## 📬 Support

Having issues or want to contribute?
Open an issue or pull request on the GitHub repository.

---
