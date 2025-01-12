import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../api/apiSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, isError, error, isSuccess }] = useLoginMutation();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login({
        email: email,
        password: password,
      }).unwrap();
      console.log(`response: ${response}`); // Now response is defined, and you can access token
      // Store the token if needed (e.g., in localStorage or Redux)
      localStorage.setItem("token", response.token); // Example of storing token in localStorage
      // Redirect or navigate to the admin dashboard page
      navigate("/admin/jobposting"); // Assuming you're using react-router for navigation
    } catch (error) {
      console.error("Login failed:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-800 via-indigo-900 to-black relative">
      {/* Back Icon */}
      <div className="absolute top-4 left-4">
        <Link to="/home" className="text-white text-xl hover:opacity-80">
          <i className="fas fa-arrow-left"></i>
        </Link>
      </div>

      {/* Left Section */}
      <div className="hidden lg:block w-1/2 text-white p-8">
        <h1 className="text-5xl font-bold mb-4">Welcome!</h1>
        <p className="text-lg mb-6">
          Welcome to HireSmart — your smart hiring solution. Simplify
          recruitment with AI-powered tools designed for efficiency. Sign in to
          get started!
        </p>
        <button className="px-6 py-3 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition">
          Learn More
        </button>
      </div>

      {/* Login Section */}
      <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 shadow-lg mt-10">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Log In
        </h2>
        <form onSubmit={handleLogin}>
          {/* email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="text"
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
            Submit
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-6 text-center text-white">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-400 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
