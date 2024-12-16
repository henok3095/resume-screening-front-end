// In jobposting.jsx file
import React, { useState } from "react";


const JobPosting = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [requirements, setRequirements] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({
      jobTitle,
      jobDescription,
      requirements,
    });
    alert("Job posted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-600 flex justify-center items-center ">
      <div className="bg-gradient-to-r from-purple-700 to-indigo-800 p-8 rounded-lg w-full max-w-2xl shadow-lg mt-20 mb-10">
        <h2 className="text-3xl text-white text-center font-bold mb-6">
          Post a New Job
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Job Title */}
          <div>
            <label
              htmlFor="jobTitle"
              className="text-white font-medium mb-2 block"
            >
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full p-3 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter job title"
              required
            />
          </div>

          {/* Job Description */}
          <div>
            <label
              htmlFor="jobDescription"
              className="text-white font-medium mb-2 block"
            >
              Job Description
            </label>
            <textarea
              id="jobDescription"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="w-full p-3 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="4"
              placeholder="Describe the job responsibilities"
              required
            />
          </div>

          {/* Requirements */}
          <div>
            <label
              htmlFor="requirements"
              className="text-white font-medium mb-2 block"
            >
              Requirements
            </label>
            <textarea
              id="requirements"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              className="w-full p-3 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="4"
              placeholder="List the job requirements"
              required
            />
          </div>

          {/* Post Job Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-red-500 to-yellow-400 text-white font-semibold rounded-lg shadow-lg hover:opacity-80 transition-all"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobPosting; 