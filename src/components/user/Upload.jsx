import React, { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [isFileValid, setIsFileValid] = useState(true);

  // Handle file selection or drag & drop
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Check if the file is a valid PDF or DOCX file
      const fileType = selectedFile.type;
      if (fileType === "application/pdf" || fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        setFile(selectedFile);
        setIsFileValid(true);
      } else {
        setIsFileValid(false);
      }
    }
  };

  // Handle drag and drop
  const handleDrop = (event) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type;
      if (fileType === "application/pdf" || fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        setFile(selectedFile);
        setIsFileValid(true);
      } else {
        setIsFileValid(false);
      }
    }
  };

  // Prevent default behavior when drag is over
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Handle form submission
  const handleSubmit = () => {
    if (file) {
      // Handle file upload (e.g., send to server or process locally)
      alert("Resume uploaded successfully!");
    } else {
      alert("Please upload a valid resume.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-pink-500 to-blue-800 min-h-screen py-10 pt-36">
      <main className="flex flex-col items-center p-8 bg-white bg-opacity-20 backdrop-blur-lg text-white rounded-lg shadow-lg w-11/12 max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-transparent bg-clip-text text-white">
          Upload your resume here
        </h1>

        {/* File Upload Area */}
        <div
          className={`flex flex-col items-center justify-center gap-6 w-full py-12 rounded-lg shadow-md ${isFileValid ? "" : "border-4 border-red-500"} bg-white bg-opacity-0 backdrop-blur-xl border-2 border-dashed border-gray-400`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <p className="text-center text-gray-200 text-lg">
            {file ? `File: ${file.name}` : "Click or drag & drop to upload your resume"}
          </p>
          <input
            type="file"
            accept=".pdf, .docx"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="py-3 px-6 bg-gradient-to-r from-pink-500 to-blue-800 text-white font-semibold rounded-md cursor-pointer"
          >
            Select File
          </label>
        </div>

        {/* File Error Message */}
        {!isFileValid && (
          <p className="text-red-500 mt-2 text-lg">Please upload a valid PDF or DOCX file.</p>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="mt-6 px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Get Started
        </button>
      </main>
    </div>
  );
};

export default Upload;
