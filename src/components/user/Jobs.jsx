import React, { useState } from "react";
import {
  useGetAllPostsQuery,
  useCreateApplicationMutation,
} from "../../api/apiSlice";

const Jobs = () => {
  const {
    data: jobs,
    error: jobError,
    isLoading: isLoadingJob,
  } = useGetAllPostsQuery();
  const [
    apply,
    { isApplicationLoading, isApplicationError, error, isApplicationSuccess },
  ] = useCreateApplicationMutation();

  const [selectedJob, setSelectedJob] = useState(null);
  const [userId, setId] = useState("id");

  const openModal = (job) => {
    setSelectedJob(job);
    setId(job._id);
    console.log(`userId: ${userId}`);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  // Fetch saved resume
  const fetchResume = () => {
    const savedFile = localStorage.getItem("resume");
    if (savedFile) {
      const link = document.createElement("a");
      link.href = savedFile;
      link.download = "resume.pdf";
      link.click();
    } else {
      alert("No resume found!");
    }
  };

  const handleApply = async (forms) => {
    try {
      const email = document.getElementById(`input-email`).value;

      // Create FormData object
      const formData = new FormData();

      // Map forms to construct the filledData array
      const filledData = forms.map((form) => {
        const inputElement = document.getElementById(`input-${form._id}`);
        return {
          fieldName: inputElement.dataset.fieldName || form.name,
          value: inputElement.value,
        };
      });

      // Append filledData as a JSON string
      formData.append("filledData", JSON.stringify(filledData));

      // Append userIdentifier (email)
      formData.append("userIdentifier", email);

      // Retrieve resume data from localStorage
      const resumeData = localStorage.getItem("resume");

      if (resumeData) {
        // Convert the Base64 or Blob data back into a File object
        const byteString = atob(resumeData.split(",")[1]); // Decode Base64
        const mimeType = resumeData.split(",")[0].split(":")[1].split(";")[0]; // Extract MIME type
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const uint8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
          uint8Array[i] = byteString.charCodeAt(i);
        }

        const file = new File([uint8Array], "resume.pdf", { type: mimeType });
        formData.append("resume", file); // Append file to FormData
      } else {
        alert("No resume found. Please upload a resume first.");
        return;
      }

      // Send the FormData object
      // Log all entries in the FormData object
      for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
        console.log('end')
      }
      const response = await apply(formData, userId).unwrap();
      console.log("Response:", response);
      alert("Applied Successfully");
    } catch (error) {
      console.error("Error applying:", error);
      alert("Failed to apply. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-pink-500 to-blue-800 min-h-screen py-10 pt-36">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl md:text-6xl font-bold text-white text-center mb-8">
          Job Listings
        </h1>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {jobs?.data.map((job) => (
            <div
              key={job._id} // Use the correct unique identifier
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
                <p className="text-md text-gray-500">
                  {job.description || "No description available"}
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => openModal(job)}
                  className="w-full py-2 text-white bg-gradient-to-r from-pink-500 to-blue-800 rounded-md hover:bg-pink-600"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedJob && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg max-w-lg w-full">
              <h2 className="text-3xl font-semibold mb-4">
                {selectedJob.title}
              </h2>
              <p className="text-md mb-4">{selectedJob.description}</p>
              {/* email form */}
              <form>
                <div className="mb-4">
                  <input
                    id={`input-email`}
                    data-field-name={"email"}
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder={`Enter Email`}
                  />
                </div>
              </form>
              {/* Render forms */}
              {selectedJob.forms && selectedJob.forms.length > 0 && (
                <div className="mt-4">
                  {selectedJob.forms.map((form) => (
                    <div key={form._id} className="mb-6">
                      <form>
                        <div className="mb-4">
                          <input
                            id={`input-${form._id}`}
                            data-field-name={form.name}
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder={`Enter ${form.name}`}
                          />
                        </div>
                      </form>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-between">
                <button
                  onClick={closeModal}
                  className="py-2 px-4 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                >
                  Close
                </button>
                <button
                  onClick={() => handleApply(selectedJob.forms)}
                  className="py-2 px-4 bg-gradient-to-r from-pink-500 to-blue-800 text-white rounded-md hover:bg-pink-600"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
