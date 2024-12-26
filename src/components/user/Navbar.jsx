import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAdminClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleProceed = () => {
    setShowPopup(false);
    navigate("/Login");
  };

  const getActiveClass = (path) => {
    return location.pathname === path ? "text-red-400" : "text-gray-900 md:text-white";
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 shadow-md ${
          showPopup ? "blur-sm" : ""
        } transition-all`}
        style={{
          background: "linear-gradient(to right, #C33764, #1D2671)",
        }}
      >
        <div className="max-w-full px-4 md:px-12 py-2 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center font-semibold text-[29px] text-gray-200 font-lilita">
            Hire Smart
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center" onClick={toggleMenu}>
            <div className="space-y-1 cursor-pointer">
              <div
                className={`h-1 w-8 bg-white transform transition duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></div>
              <div
                className={`h-1 w-8 bg-white transition duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`h-1 w-8 bg-white transform transition duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></div>
            </div>
          </div>

          {/* Links */}
          <ul
            className={`md:flex md:items-center md:space-x-12 absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <a
                href="/home"
                className={`block py-3 md:py-0 px-6 md:px-0 text-xl md:text-2xl hover:text-red-400 transition duration-300 ${getActiveClass(
                  "/home"
                )}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`block py-3 md:py-0 px-6 md:px-0 text-xl md:text-2xl hover:text-red-400 transition duration-300 ${getActiveClass(
                  "/about"
                )}`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/Jobs"
                className={`block py-3 md:py-0 px-6 md:px-0 text-xl md:text-2xl hover:text-red-400 transition duration-300 ${getActiveClass(
                  "/Jobs"
                )}`}
              >
                Jobs
              </a>
            </li>
            <li>
              <a
                href="/Upload"
                className={`block py-3 md:py-0 px-6 md:px-0 text-xl md:text-2xl hover:text-red-400 transition duration-300 ${getActiveClass(
                  "/Upload"
                )}`}
              >
                Upload
              </a>
            </li>
            {/* Admin Button */}
            <li>
              <button
                onClick={handleAdminClick}
                className="bg-yellow-400 text-gray-800 font-semibold text-lg md:text-xl px-4 py-2 rounded-md shadow-md hover:bg-yellow-500 transition-all"
              >
                Admin
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Admin Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Admin Login
            </h2>
            <p className="text-gray-600 mb-6">
              You will now login as an admin. Do you want to continue?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closePopup}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleProceed}
                className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-md hover:bg-yellow-500 transition"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
