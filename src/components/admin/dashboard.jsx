import React from "react";
import { Bar } from "react-chartjs-2";
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
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Example data for the charts
  const barChartData = {
    labels: ["Job A", "Job B", "Job C", "Job D"],
    datasets: [
      {
        label: "Number of Applicants",
        data: [5, 15, 7, 3],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-16">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Job Posting Analytics</h1>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Jobs</h3>
          <p className="text-2xl font-bold text-blue-500">120</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Applicants</h3>
          <p className="text-2xl font-bold text-green-500">450</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Jobs Filled</h3>
          <p className="text-2xl font-bold text-purple-500">65</p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Applicants Per Job</h3>
        <Bar
          data={barChartData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" },
              title: { display: true, text: "Number of Applicants by Job" },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
