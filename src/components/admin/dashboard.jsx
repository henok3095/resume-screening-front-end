import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    // Fetch applicants data (replace with actual API call)
    const fetchApplicantsData = async () => {
      const data = [
        { name: "Henok E", email: "henok@example.com", rank: 1 },
        { name: "Abenezer T", email: "abenezer@example.com", rank: 2 },
        { name: "Isam A", email: "isam@example.com", rank: 3 },
        { name: "Isam A", email: "isam@example.com", rank: 4 },
      ];
      setApplicantsData(data);
    };

    fetchApplicantsData();
  }, [navigate]);

  // Example data for the charts
  const barChartData = {
    labels: ["Job A", "Job B", "Job C", "Job D"],
    datasets: [
      {
        label: "Number of Applicants",
        data: [5, 15, 7, 3],
        backgroundColor: "rgba(255, 159, 64, 0.7)",  // A bold color
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-indigo-200 to-purple-300 pt-16 px-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">Dashboard</h1>
        <p className="text-lg text-gray-600 mt-2">Your personalized job insights and statistics</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div className="bg-white p-8 rounded-xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-teal-400 to-blue-400">
          <h3 className="text-2xl font-semibold ">Total Jobs Posted</h3>
          <p className="text-6xl font-extrabold text-gray-900 mt-2">120</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-green-400 to-teal-500">
          <h3 className="text-2xl font-semibold ">Total Applicants</h3>
          <p className="text-6xl font-extrabold text-gray-900 mt-2">450</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-purple-400 to-pink-500">
          <h3 className="text-2xl font-semibold ">Jobs Filled</h3>
          <p className="text-6xl font-extrabold text-gray-900 mt-2">65</p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-8 rounded-xl shadow-xl mb-10">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">Applicants Per Job</h3>
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
          }}
        />
      </div>

      {/* Applicants Table */}
      <div className="bg-white p-8 rounded-xl shadow-xl">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">Applicants for Jobs</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse table-auto">
            <thead className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
              <tr>
                <th className="p-6 text-lg font-medium">Name</th>
                <th className="p-6 text-lg font-medium">Email</th>
                <th className="p-6 text-lg font-medium">Rank</th>
              </tr>
            </thead>
            <tbody>
              {applicantsData.map((applicant, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } transition duration-300 hover:bg-gradient-to-r hover:from-teal-200 hover:to-blue-200`}
                >
                  <td className="p-6 text-gray-800">{applicant.name}</td>
                  <td className="p-6 text-blue-600">{applicant.email}</td>
                  <td className="p-6 text-green-600">{applicant.rank}</td>
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
