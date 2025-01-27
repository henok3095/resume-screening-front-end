// In jobposting.jsx file
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCreatePostMutation } from "../../api/apiSlice";


const JobPosting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [formTitles, setFormTitles] = useState([]);
  const [newForms, setNewForms] = useState([]);

  const [post, { isLoading, isError, error, isSuccess }] =
    useCreatePostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Job Posted:", {
      title: jobTitle,
      description: jobDescription,
      forms: newForms.map((form) => ({ title: form.title })),
    });
    try {
      const response = await post({
        title: jobTitle,
        description: jobDescription,
        forms: newForms.map((form) => ({ name: form.title })),
      }).unwrap();
      console.log(`response: ${response}`);
      alert("Job Posted Successfully");
    } catch (error) {
      console.error("Job Post failed:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  const addForm = () => {
    setNewForms([...newForms, { id: newForms.length, title: "" }]);
  };

  const handleFormTitleChange = (index, value) => {
    const updatedForms = [...newForms];
    updatedForms[index].title = value;
    setNewForms(updatedForms);
    console.log("New Forms:", updatedForms);

    // Save titles to formTitles array
    const updatedTitles = updatedForms.map((form) => form.title);
    setFormTitles(updatedTitles);
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
              Job Description | Requirements
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

          {/* Requirements
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
          </div> */}

          {/* Dynamic Forms */}
          <div className="space-y-4">
            {newForms.map((form, index) => (
              <div
                key={form.id}
                className="p-4 border border-gray-600 rounded-md"
              >
                <label
                  htmlFor={`formTitle-${form.id}`}
                  className="text-white font-medium mb-2 block"
                >
                  Form Title {index + 1}
                </label>
                <input
                  type="text"
                  id={`formTitle-${form.id}`}
                  value={form.title}
                  onChange={(e) => handleFormTitleChange(index, e.target.value)}
                  className="w-full p-3 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter form title"
                  required
                />
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <button
                type="button"
                onClick={addForm}
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-80 transition-all"
              >
                Add Form
              </button>
            </div>
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
