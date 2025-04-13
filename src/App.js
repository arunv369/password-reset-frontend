import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<ForgotPassword />} />

        {/* Other Routes */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
