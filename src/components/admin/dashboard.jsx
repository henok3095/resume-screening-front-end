import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import { useLazyGetAnaylticsQuery } from "../../api/apiSlice";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { useGetAnaylticsQuery } from "../../api/apiSlice";
import {
  useGetAllPostsQuery,
  useCreateApplicationMutation,
} from "../../api/apiSlice";

// Registering necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const navigate = useNavigate();
  const [applicantsData, setApplicantsData] = useState([]);
  const [totalApplications, setTotalApplications] = useState(0);
  const [selectedJob, setSelectedJob] = useState(null); // Track the selected job
  const [selectedJobId, setSelectedJobId] = useState(null); // Track the selected job

  const {
    data: analytics,
    error: anaError,
    isLoading: isLoadingana,
  } = useGetAnaylticsQuery();

  const {
    data: jobs,
    error: jobError,
    isLoading: isLoadingJob,
  } = useGetAllPostsQuery();

  const [triggerGetAnalytics, { data: rankedData, isLoading, error }] =
    useLazyGetAnaylticsQuery(); // Hook for lazy query

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    // Calculate the total number of applications
    const total = jobs?.data?.reduce((acc, job) => {
      if (Array.isArray(job.applications)) {
        return acc + job.applications.length; // Add the number of applications
      }
      return acc; // If applications is not an array, skip it
    }, 0);

    setTotalApplications(total || 0); // Set the total applications
  }, [jobs]); // Recalculate if jobs changes

  // Example data for the charts
  const barChartData = {
    labels: jobs?.data?.map((job) => job.title), // Extract job titles for labels
    datasets: [
      {
        label: "Number of Applicants",
        data: jobs?.data?.map((job) => job.applications?.length || 0), // Map applications' length to data
        backgroundColor: "rgba(255, 159, 64, 0.7)", // A bold color
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Handle bar chart click
  const handleBarClick = (e, chartElement) => {
    if (chartElement.length > 0) {
      // Get the clicked index (first element)
      const clickedIndex = chartElement[0].index;
      const job = jobs?.data[clickedIndex]; // Get the corresponding job

      if (job && Array.isArray(job.applications)) {
        setApplicantsData(job.applications); // Update table with selected job's applicants
        setSelectedJob(job); // Store the selected job for other uses if needed
        setSelectedJobId(job?._id); // Store the selected job for other uses if needed
      }
    }
  };

  const rankApplicants = (selectedJobId) => {
    if (!selectedJobId) {
      console.error("Job ID is required");
      return;
    }

    // Trigger the API call
    triggerGetAnalytics(selectedJobId)
      .unwrap()
      .then((response) => {
        console.log("Ranked applicants data:", response);
        // Handle ranked data (e.g., set state, update UI)
      })
      .catch((err) => {
        console.error("Error fetching ranked applicants:", err);
      });
  };

  console.log(rankedData?.data);
  const displayApplicants = rankedData?.data || selectedJob?.applications || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-indigo-200 to-purple-300 pt-16 px-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          Dashboard
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Your personalized job insights and statistics
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div className="bg-white p-8 rounded-xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-teal-400 to-blue-400">
          <h3 className="text-2xl font-semibold ">Total Jobs Posted</h3>
          <p className="text-6xl font-extrabold text-gray-900 mt-2">
            {jobs?.data.length}
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-green-400 to-teal-500">
          <h3 className="text-2xl font-semibold ">Total Applicants</h3>
          <p className="text-6xl font-extrabold text-gray-900 mt-2">
            {totalApplications}
          </p>
        </div>
        {/* <div className="bg-white p-8 rounded-xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-purple-400 to-pink-500">
          <h3 className="text-2xl font-semibold ">Jobs Filled</h3>
          <p className="text-6xl font-extrabold text-gray-900 mt-2">65</p>
        </div> */}
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-8 rounded-xl shadow-xl mb-10">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">
          Applicants Per Job
        </h3>
        <Bar
          data={barChartData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" },
              title: { display: true, text: "Number of Applicants by Job" },
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  color: "#6B7280",
                  font: {
                    family: "Inter, sans-serif",
                    size: 14,
                    weight: "500",
                  },
                },
              },
              x: {
                ticks: {
                  color: "#6B7280",
                  font: {
                    family: "Inter, sans-serif",
                    size: 14,
                    weight: "500",
                  },
                },
              },
            },
            onClick: handleBarClick, // Attach the click event handler
          }}
        />
      </div>

      {/* Applicants Table */}
      <div className="bg-white p-8 rounded-xl shadow-xl">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6 flex items-center gap-4">
          {selectedJob
            ? `Applicants for ${selectedJob.title}`
            : "Click one of the bars above to view applicants"}
          <button
            onClick={() => rankApplicants(selectedJobId)}
            className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Rank
          </button>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse table-auto">
            <thead className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
              <tr>
                <th className="p-6 text-lg font-medium">Email</th>
                <th className="p-6 text-lg font-medium">Score</th>
                <th className="p-6 text-lg font-medium">Rank</th>
              </tr>
            </thead>
            <tbody>
              {displayApplicants?.map((applicant, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } transition duration-300 hover:bg-gradient-to-r hover:from-teal-200 hover:to-blue-200`}
                >
                  <td className="p-6 text-blue-600">
                    {rankedData
                      ? applicant.uniqueIdentifier
                      : applicant.userIdentifier}
                  </td>
                  <td className="p-6 text-green-600">
                    {rankedData ? applicant.score : "Rank to view score"}
                  </td>
                  <td className="p-6 text-green-600">
                    {rankedData ? applicant.rank : "Rank to view rank"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
