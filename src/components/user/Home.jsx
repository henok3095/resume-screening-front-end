import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); 

  const handleGetStarted = () => {
    navigate("/upload"); // Navigate to the upload page
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-b from-pink-500 to-blue-800 text-white text-center"
      >
        {/* Text Content */}
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Revolutionize your hiring process
          </h1>
          <button
            onClick={handleGetStarted} // Add the click handler
            className="px-10 py-4 text-lg font-semibold rounded-lg shadow-2xl transition duration-300 bg-gradient-to-r from-[#FF6B6B] to-[#994040] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-white"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-16 md:gap-24">
            {/* Feature Boxes */}
            <div className="h-72 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg p-6 flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-file-alt text-white text-2xl"></i> 
                </div>
                <h3 className="text-2xl font-bold mb-2">Smart Resume Screening</h3>
                <p className="text-gray-300">
                  Use AI to efficiently filter and rank resumes, saving time and ensuring top talent rises to the top.
                </p>
              </div>
            </div>

            <div className="h-72 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg p-6 flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-bar text-white text-2xl"></i> 
                </div>
                <h3 className="text-2xl font-bold mb-2">Analytics Dashboard</h3>
                <p className="text-gray-300">
                  Gain insights into job postings, applicant metrics, and hiring performance with our intuitive dashboard.
                </p>
              </div>
            </div>

            <div className="h-72 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg p-6 flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-white text-2xl"></i> {/* Example icon */}
                </div>
                <h3 className="text-2xl font-bold mb-2">Collaborative Tools</h3>
                <p className="text-gray-300">
                  Allow your team to collaborate seamlessly in reviewing, shortlisting, and finalizing candidates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
