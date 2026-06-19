import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function Analytics() {
  const donationData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Blood Donations",
        data: [120, 190, 150, 220, 260, 310],
        backgroundColor: [
          "#dc2626",
          "#ef4444",
          "#f87171",
          "#b91c1c",
          "#991b1b",
          "#7f1d1d",
        ],
      },
    ],
  };

  const bloodData = {
    labels: ["O+", "O-", "A+", "A-", "B+", "AB+"],
    datasets: [
      {
        data: [120, 40, 90, 25, 80, 30],
        backgroundColor: [
          "#dc2626",
          "#2563eb",
          "#16a34a",
          "#f59e0b",
          "#7c3aed",
          "#ec4899",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-red-600 text-white p-5">
        <h1 className="text-3xl font-bold">
          Analytics Dashboard
        </h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 p-8">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Total Donations</h2>
          <p className="text-4xl font-bold text-red-600">
            1250
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Blood Units</h2>
          <p className="text-4xl font-bold text-green-600">
            850
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Emergency Requests</h2>
          <p className="text-4xl font-bold text-blue-600">
            300
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Hospitals Served</h2>
          <p className="text-4xl font-bold text-purple-600">
            120
          </p>
        </div>

      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-8 px-8 pb-8">

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold text-black mb-4">
            Monthly Blood Donations
          </h2>

          <Bar data={donationData} />

        </div>

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold text-black mb-4">
            Blood Group Distribution
          </h2>

          <Pie data={bloodData} />

        </div>

      </div>

      {/* Summary Table */}
      <div className="px-8 pb-8">

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-2xl font-bold text-black mb-4">
            Monthly Report
          </h2>

          <table className="w-full">

            <thead>

              <tr className="bg-red-600 text-white">

                <th className="p-3">Month</th>
                <th className="p-3">Donations</th>
                <th className="p-3">Requests</th>
                <th className="p-3">Success Rate</th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b text-black">
                <td className="p-3">January</td>
                <td className="p-3">120</td>
                <td className="p-3">100</td>
                <td className="p-3">98%</td>
              </tr>

              <tr className="border-b text-black">
                <td className="p-3">February</td>
                <td className="p-3">190</td>
                <td className="p-3">140</td>
                <td className="p-3">99%</td>
              </tr>

              <tr className="border-b text-black">
                <td className="p-3">March</td>
                <td className="p-3">150</td>
                <td className="p-3">120</td>
                <td className="p-3">97%</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}