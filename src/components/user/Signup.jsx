import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-800 via-indigo-900 to-black relative">
      {/* Back Icon */}
      <div className="absolute top-4 left-4">
        <Link to="/Home" className="text-white text-xl hover:opacity-80">
          <i className="fas fa-arrow-left"></i>
        </Link>
      </div>

      {/* Left Section */}
      <div className="hidden lg:block w-1/2 text-white p-8">
        <h1 className="text-5xl font-bold mb-4">Join Us!</h1>
        <p className="text-lg mb-6">
          Welcome to HireSmart — your smart hiring solution. Create an account to simplify your recruitment journey with AI-powered tools. 
          Start today and make hiring seamless!
        </p>
        <button className="px-6 py-3 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition">
          Learn More
        </button>
      </div>

      {/* Sign-Up Section */}
      <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 shadow-lg mt-10">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-white text-sm font-semibold mb-2"
            >
              User Name
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-sm font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold bg-gradient-to-r from-red-500 to-orange-400 rounded-lg hover:opacity-90 transition-all"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-white">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-400 font-semibold hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
