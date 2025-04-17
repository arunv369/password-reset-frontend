import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [toast, setToast] = useState({ type: "", message: "", show: false });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const showToast = (type, message) => {
    setToast({ type, message, show: true });
    setTimeout(() => setToast({ ...toast, show: false }), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://password-reset-backend-at2j.onrender.com/api/auth/login",
        formData
      );

      // Store token or handle session as needed
      localStorage.setItem("token", res.data.token);

      showToast("success", "Login successful!");
      setFormData({ email: "", password: "" });
      setTimeout(() => navigate("/"), 2000); // redirect to home or dashboard
    } catch (err) {
      showToast("danger", err.response?.data?.msg || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Login</h2>

      {/* Toast */}
      <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
        <div
          className={`toast align-items-center text-bg-${
            toast.type
          } border-0 show ${toast.show ? "" : "d-none"}`}
          role="alert"
        >
          <div className="d-flex">
            <div className="toast-body">{toast.message}</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              onClick={() => setToast({ ...toast, show: false })}
            ></button>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </button>
        <div className="text-center mt-3">
          <Link to="/forgot-password" className="text-decoration-none">
            Forgot your password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
