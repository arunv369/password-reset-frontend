import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://password-reset-backend-j0ll.onrender.com/api/auth/reset-password/${token}`,
        { password }
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
            <h2 className="text-center mb-4">Reset Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Reset Password
              </button>
            </form>
            {message && <div className="alert alert-info mt-3">{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
