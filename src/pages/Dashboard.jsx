import {
  FaUsers,
  FaTint,
  FaHospital,
  FaBell,
  FaChartBar,
  FaMapMarkedAlt,
  FaCampground,
  FaRobot,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-64 bg-black text-white min-h-screen">
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-2xl font-bold text-red-500">
            🩸 Smart Blood Bank
          </h1>
        </div>

        <div className="p-4 space-y-3">
          <button onClick={() => navigate("/dashboard")} className="w-full text-left bg-red-600 p-3 rounded-lg">
            Dashboard
          </button>

          <button onClick={() => navigate("/donors")} className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
            Donors
          </button>

          <button onClick={() => navigate("/inventory")} className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
            Blood Inventory
          </button>

          <button onClick={() => navigate("/compatibility")} className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
            Compatibility Matrix
          </button>

          <button onClick={() => navigate("/emergency")} className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
            Emergency Requests
          </button>

          <button onClick={() => navigate("/analytics")} className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
            Analytics
          </button>

          <button onClick={() => navigate("/smart-features")} className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
            Smart Features
          </button>

          <button onClick={() => navigate("/camps")} className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
            Donation Camps
          </button>

          <button onClick={() => navigate("/hospitals")} className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
            Hospitals
          </button>

          <button onClick={() => navigate("/ai-assistant")} className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
            AI Assistant
          </button>

          <button onClick={() => navigate("/map")} className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
            Live Map
          </button>

          <button onClick={() => navigate("/admin-blood-requests")} className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
            Admin Blood Requests
          </button>

          <button onClick={() => navigate("/admin-donor-management")} className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
            Donor Management
          </button>

          <button onClick={() => navigate("/linked-inventory")} className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
            Linked Inventory
          </button>

          <button onClick={() => navigate("/hospital-dashboard")} className="w-full text-left hover:bg-gray-800 p-3 rounded-lg">
            Hospital Dashboard
          </button>
        </div>
      </div>

      <div className="flex-1">
        <div className="bg-white shadow p-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-black">Dashboard</h1>

          <div className="flex gap-4 items-center">
            <FaBell size={22} className="text-red-600" />

            <button
              onClick={() => navigate("/")}
              className="bg-red-600 text-white px-5 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 p-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <FaUsers className="text-red-600 text-3xl mb-3" />
            <h2 className="text-gray-500">Total Donors</h2>
            <p className="text-4xl text-black font-bold">1250</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <FaTint className="text-red-600 text-3xl mb-3" />
            <h2 className="text-gray-500">Blood Units</h2>
            <p className="text-4xl text-black font-bold">850</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <FaHospital className="text-red-600 text-3xl mb-3" />
            <h2 className="text-gray-500">Hospitals</h2>
            <p className="text-4xl text-black font-bold">120</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <FaChartBar className="text-red-600 text-3xl mb-3" />
            <h2 className="text-gray-500">Requests</h2>
            <p className="text-4xl text-black font-bold">300</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 px-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl text-black font-bold mb-4">
              Demand vs Supply
            </h2>

            <div className="flex justify-center items-center h-64">
              <div className="w-48 h-48 rounded-full border-[30px] border-red-500 border-r-green-500"></div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl text-black font-bold mb-4">Blood Stock</h2>

            <div className="flex items-end gap-4 h-64">
              <div className="bg-red-500 w-12 h-44"></div>
              <div className="bg-red-500 w-12 h-28"></div>
              <div className="bg-red-500 w-12 h-52"></div>
              <div className="bg-red-500 w-12 h-20"></div>
              <div className="bg-red-500 w-12 h-36"></div>
              <div className="bg-red-500 w-12 h-16"></div>
            </div>
          </div>
        </div>

        <div className="p-8 grid grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl text-black font-bold mb-4">
              Recent Emergency Requests
            </h2>

            <table className="w-full">
              <thead>
                <tr className="border-b text-black">
                  <th className="text-left p-3">Request ID</th>
                  <th className="text-left p-3">Blood Type</th>
                  <th className="text-left p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b text-black">
                  <td className="p-3">REQ001</td>
                  <td className="p-3">O-</td>
                  <td className="p-3 text-red-600 font-bold">Urgent</td>
                </tr>

                <tr className="border-b text-black">
                  <td className="p-3">REQ002</td>
                  <td className="p-3">A+</td>
                  <td className="p-3 text-green-600 font-bold">Completed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <FaCampground className="text-red-600 text-4xl mb-4" />

            <h2 className="text-2xl text-black font-bold">Donation Camps</h2>

            <p className="text-gray-600 mt-3">
              Manage upcoming blood donation camps, locations, and organizers.
            </p>

            <button
              onClick={() => navigate("/camps")}
              className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg"
            >
              View Camps
            </button>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <FaRobot className="text-red-600 text-4xl mb-4" />

            <h2 className="text-2xl text-black font-bold">
              AI Health Assistant
            </h2>

            <p className="text-gray-600 mt-3">
              Get quick answers about eligibility, blood groups, expiry, and
              storage.
            </p>

            <button
              onClick={() => navigate("/ai-assistant")}
              className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg"
            >
              Open Assistant
            </button>
          </div>
        </div>

        <div className="px-8 pb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <FaMapMarkedAlt className="text-red-600 text-4xl mb-4" />

            <h2 className="text-2xl text-black font-bold">
              Live Donor & Hospital Map
            </h2>

            <p className="text-gray-600 mt-3">
              Track nearby donors and hospitals for emergency blood requests.
            </p>

            <button
              onClick={() => navigate("/map")}
              className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg"
            >
              Open Live Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}