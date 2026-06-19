import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDonorManagement() {
  const navigate = useNavigate();
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("donorUsers")) || [];
    setDonors(saved);
  }, []);

  const deleteDonor = (index) => {
    const updated = donors.filter((_, i) => i !== index);
    setDonors(updated);
    localStorage.setItem("donorUsers", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-red-50 p-8">
      <h1 className="text-4xl font-bold text-red-600 mb-8">
        Registered Donors
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="p-4">Username</th>
              <th className="p-4">Age</th>
              <th className="p-4">Blood Group</th>
              <th className="p-4">Gender</th>
              <th className="p-4">Health Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {donors.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-6 text-center text-gray-500">
                  No donors found
                </td>
              </tr>
            ) : (
              donors.map((donor, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">{donor.username}</td>
                  <td className="p-4">{donor.age}</td>
                  <td className="p-4 font-bold text-red-600">
                    {donor.bloodGroup}
                  </td>
                  <td className="p-4">{donor.gender}</td>
                  <td className="p-4">{donor.healthStatus}</td>
                  <td className="p-4">
                    <button
                      onClick={() => deleteDonor(index)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg"
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