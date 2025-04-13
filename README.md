I have issue in connecting the Mongoose with ATLAS MongoDB DATABASE it showing error like
ERROR:
Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://www.mongodb.com/docs/atlas/security-whitelist/

I Connected with Mentor - Venkata Gopichand regarding the issue, mentor said like
-> The issue may be due to our area.

But its connecting with MongoDB Compass and i testes API Endpoints everything is working Fine

The only Problem is connecting with the ATLAS MongoDB DATABASE

So in the render it may not show the Data

# 🎨 Password Reset Frontend

This is the **React + Bootstrap** frontend for the Password Reset Flow. Users can request a password reset and set a new password via a link sent to their email.

---

## ⚙️ Tech Stack

- React
- React Router
- Bootstrap 5
- Axios

---

## 📦 Setup Instructions

### 1. Navigate to frontend:

```bash
cd password-reset/frontend
```

```

### 2.Install dependencies:

npm install

### 3.Start the React app:

npm start

📁 Pages
🔑 /forgot-password
Form to enter registered email.

Sends a password reset link to the email.

🔐 /reset-password/:token
Opens form to enter a new password.

Token is verified and new password is saved.

🖼 UI Overview
Clean Bootstrap-based design.

Responsive layout for desktop and mobile.

Helpful alerts and success messages.
```
