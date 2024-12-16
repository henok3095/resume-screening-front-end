import { Route, Routes } from "react-router-dom";

// Import user side components
import Home from "./components/user/Home";
import About from "./components/user/About";
import Jobs from "./components/user/Jobs";
import Upload from "./components/user/Upload";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";

// Import admin side components
import Dashboard from "./components/admin/dashboard";
import JobPosting from "./components/admin/jobposting";

// User Routes
export const UserRoutes = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/jobs" element={<Jobs />} />
    <Route path="/upload" element={<Upload />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
);

// Admin Routes
export const AdminRoutes = () => (
  <Routes>
    <Route path="dashboard" element={<Dashboard />} /> 
    <Route path="jobposting" element={<JobPosting />} />
  </Routes>
);
