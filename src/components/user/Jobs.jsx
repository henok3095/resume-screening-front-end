import React, { useState } from "react";

// Sample data for jobs
const jobs = [
  { id: 1, title: "Software Engineer", company: "TechCorp", location: "New York, NY", description: "Join our tech team and work on cutting-edge projects. You'll be building scalable software and improving user experience." },
  { id: 2, title: "Data Scientist", company: "DataX", location: "San Francisco, CA", description: "Work with big data and machine learning models to help drive business insights and decisions." },
  { id: 3, title: "Product Manager", company: "InnovateTech", location: "Remote", description: "Lead cross-functional teams to define and launch new products while managing the entire product lifecycle." },
  { id: 4, title: "UX Designer", company: "DesignWorks", location: "Austin, TX", description: "Design user interfaces that are intuitive and visually appealing, working closely with developers and product managers." },
  { id: 5, title: "DevOps Engineer", company: "CloudFusion", location: "Seattle, WA", description: "Ensure seamless integration and deployment of applications with a focus on automation and cloud infrastructure." },
  { id: 6, title: "Marketing Specialist", company: "Brandify", location: "Chicago, IL", description: "Develop and execute marketing strategies to increase brand awareness and drive customer engagement." },
  
];

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  
  const openModal = (job) => {
    setSelectedJob(job);
  };

  
  const closeModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="bg-gradient-to-b from-pink-500 to-blue-800 min-h-screen py-10 pt-36">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl md:text-6xl font-bold text-white text-center mb-8">Job Listings</h1>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
                <p className="text-lg text-gray-700 mb-2">{job.company}</p>
                <p className="text-md text-gray-500">{job.location}</p>
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
              <h2 className="text-3xl font-semibold mb-4">{selectedJob.title}</h2>
              <p className="text-xl mb-4">{selectedJob.company}</p>
              <p className="text-lg mb-4">{selectedJob.location}</p>
              <p className="text-md mb-4">{selectedJob.description}</p>
              <div className="flex justify-between">
                <button
                  onClick={closeModal}
                  className="py-2 px-4 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                >
                  Close
                </button>
                <button className="py-2 px-4 bg-gradient-to-r from-pink-500 to-blue-800 text-white rounded-md hover:bg-pink-600">
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
