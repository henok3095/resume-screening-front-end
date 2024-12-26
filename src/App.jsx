import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Import user side components
import Navbar from "./components/user/Navbar";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";

// Import admin side components
import AdminNavbar from "./components/admin/AdminNavbar";

// Import Footer
import Footer from "./components/user/footer"; 

import Home from "./components/user/Home";

// Import user and admin routes
import { UserRoutes } from "./routes";
import { AdminRoutes } from "./routes";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  const noNavbarRoutes = ["/login", "/signup"];

  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    setIsAdmin(isAdminRoute);
  }, [location]);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Navbar */}
      {!noNavbarRoutes.includes(location.pathname.toLowerCase()) &&
        (isAdminRoute ? <AdminNavbar /> : <Navbar />)}
      
      {/* Toggle button */}
      {!noNavbarRoutes.includes(location.pathname.toLowerCase()) && (
        <button onClick={() => setIsAdmin(!isAdmin)} className="toggle-button">
          Toggle Admin/User
        </button>
      )}

      <main style={{ flex: 1 }}>
        {/* Routes */}
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          
          {/* Admin and User routes */}
          {isAdmin ? (
            <Route path="/admin/*" element={<AdminRoutes />} />
          ) : (
            <Route path="/*" element={<UserRoutes />} />
          )}
        </Routes>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
