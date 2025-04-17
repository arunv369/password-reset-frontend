import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Password validation function
  const validatePassword = (pwd) => {
    const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pattern.test(pwd);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check password validity
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character."
      );
      return;
    }

    setError("");

    try {
      const res = await axios.post(
        `https://password-reset-backend-4340.onrender.com/api/auth/reset-password/${token}`,
        { password }
      );
      setMessage(res.data.msg);

      // Redirect to login after a short delay
      setTimeout(() => navigate("/login"), 2000);
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

              {/* Error Message */}
              {error && <div className="alert alert-danger">{error}</div>}

              <button type="submit" className="btn btn-success w-100">
                Reset Password
              </button>
            </form>

            {/* Info Message */}
            {message && <div className="alert alert-info mt-3">{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
