import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://password-reset-backend-4340.onrender.com/api/auth/forgot-password",
        { email }
      );
      setMessage(res.data.msg);
    } catch (err) {
      setMessage(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h2 className="text-center mb-4">Forgot Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Reset Link
              </button>
            </form>
            {message && <div className="alert alert-info mt-3">{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
