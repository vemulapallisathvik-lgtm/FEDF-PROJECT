import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LinkedInventory() {
  const navigate = useNavigate();

  const defaultInventory = {
    "A+": 20,
    "A-": 10,
    "B+": 18,
    "B-": 8,
    "O+": 25,
    "O-": 7,
    "AB+": 12,
    "AB-": 6,
  };

  const [inventory, setInventory] = useState(defaultInventory);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const savedInventory =
      JSON.parse(localStorage.getItem("linkedInventory")) || defaultInventory;

    const savedRequests =
      JSON.parse(localStorage.getItem("bloodRequests")) || [];

    setInventory(savedInventory);
    setRequests(savedRequests);
  }, []);

  const issueBlood = (requestIndex) => {
    const req = requests[requestIndex];
    const qty = Number(req.quantity);

    if (!req.bloodGroup || qty <= 0) {
      alert("Invalid request quantity");
      return;
    }

    if ((inventory[req.bloodGroup] || 0) < qty) {
      alert("Not enough stock available");
      return;
    }

    const updatedInventory = {
      ...inventory,
      [req.bloodGroup]: inventory[req.bloodGroup] - qty,
    };

    const updatedRequests = [...requests];
    updatedRequests[requestIndex] = {
      ...updatedRequests[requestIndex],
      status: "Issued",
      issuedDate: new Date().toLocaleString(),
    };

    setInventory(updatedInventory);
    setRequests(updatedRequests);

    localStorage.setItem(
      "linkedInventory",
      JSON.stringify(updatedInventory)
    );

    localStorage.setItem(
      "bloodRequests",
      JSON.stringify(updatedRequests)
    );

    alert("Blood issued successfully. Request moved to Issued status.");
  };

  const approvedRequests = requests
    .map((req, index) => ({ ...req, originalIndex: index }))
    .filter((req) => req.status === "Approved");

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white p-8">
      <h1 className="text-4xl font-bold text-red-600 mb-8">
        Blood Inventory Linked to Requests
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {Object.entries(inventory).map(([group, units]) => (
          <div
            key={group}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <h2 className="text-4xl font-bold text-red-600">{group}</h2>
            <p className="text-xl mt-2">{units} Units</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">
        <h2 className="text-2xl font-bold mb-5 text-red-600">
          Approved Requests
        </h2>

        <table className="w-full text-left">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="p-4">Patient</th>
              <th className="p-4">Blood Group</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Hospital</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {approvedRequests.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-6 text-center text-gray-500">
                  No approved requests found
                </td>
              </tr>
            ) : (
              approvedRequests.map((req) => (
                <tr key={req.originalIndex} className="border-b">
                  <td className="p-4">{req.patientName}</td>

                  <td className="p-4 font-bold text-red-600">
                    {req.bloodGroup}
                  </td>

                  <td className="p-4">{req.quantity}</td>

                  <td className="p-4">{req.hospitalName}</td>

                  <td className="p-4 text-green-600 font-bold">
                    {req.status}
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() => issueBlood(req.originalIndex)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    >
                      Issue Blood
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <button
        onClick={() => navigate("/dashboard")}
        className="mt-8 bg-red-600 text-white px-6 py-3 rounded-lg"
      >
        Back to Dashboard
      </button>
    </div>
  );
}