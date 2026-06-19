import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminBloodRequests() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bloodRequests")) || [];
    setRequests(saved);
  }, []);

  const updateStatus = (index, status) => {
    const updated = [...requests];
    updated[index].status = status;
    setRequests(updated);
    localStorage.setItem("bloodRequests", JSON.stringify(updated));
  };

  const deleteRequest = (index) => {
    const updated = requests.filter((_, i) => i !== index);
    setRequests(updated);
    localStorage.setItem("bloodRequests", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-red-50 p-8">
      <h1 className="text-4xl font-bold text-red-600 mb-8">
        Admin Blood Requests
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="p-4">Patient</th>
              <th className="p-4">Age</th>
              <th className="p-4">Blood Group</th>
              <th className="p-4">Gender</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Hospital</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan="8" className="p-6 text-center text-gray-500">
                  No blood requests found
                </td>
              </tr>
            ) : (
              requests.map((req, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">{req.patientName}</td>
                  <td className="p-4">{req.age}</td>
                  <td className="p-4 font-bold text-red-600">
                    {req.bloodGroup}
                  </td>
                  <td className="p-4">{req.gender}</td>
                  <td className="p-4">{req.quantity}</td>
                  <td className="p-4">{req.hospitalName}</td>
                  <td className="p-4">{req.status || "Pending"}</td>
                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() => updateStatus(index, "Approved")}
                      className="bg-green-600 text-white px-3 py-2 rounded-lg"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => updateStatus(index, "Rejected")}
                      className="bg-yellow-500 text-white px-3 py-2 rounded-lg"
                    >
                      Reject
                    </button>

                    <button
                      onClick={() => deleteRequest(index)}
                      className="bg-red-600 text-white px-3 py-2 rounded-lg"
                    >
                      Delete
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