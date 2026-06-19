import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HospitalDashboard() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const savedRequests =
      JSON.parse(localStorage.getItem("bloodRequests")) || [];
    const savedDonations =
      JSON.parse(localStorage.getItem("donationAppointments")) || [];

    setRequests(savedRequests);
    setDonations(savedDonations);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-white to-pink-100 p-8">
      <h1 className="text-4xl font-bold text-red-600 mb-8">
        Hospital Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <h2 className="text-4xl font-bold text-red-600">
            {requests.length}
          </h2>
          <p className="text-lg mt-2">Total Blood Requests</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <h2 className="text-4xl font-bold text-green-600">
            {requests.filter((r) => r.status === "Approved").length}
          </h2>
          <p className="text-lg mt-2">Approved Requests</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <h2 className="text-4xl font-bold text-blue-600">
            {donations.length}
          </h2>
          <p className="text-lg mt-2">Donation Appointments</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-10 overflow-x-auto">
        <h2 className="text-2xl font-bold text-red-600 mb-5">
          Patient Blood Requests
        </h2>

        <table className="w-full text-left">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="p-4">Patient</th>
              <th className="p-4">Blood Group</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Hospital</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-6 text-center text-gray-500">
                  No requests found
                </td>
              </tr>
            ) : (
              requests.map((req, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">{req.patientName}</td>
                  <td className="p-4 font-bold text-red-600">
                    {req.bloodGroup}
                  </td>
                  <td className="p-4">{req.quantity}</td>
                  <td className="p-4">{req.hospitalName}</td>
                  <td className="p-4">{req.status || "Pending"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">
        <h2 className="text-2xl font-bold text-red-600 mb-5">
          Donation Appointments
        </h2>

        <table className="w-full text-left">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="p-4">Hospital</th>
              <th className="p-4">Date</th>
              <th className="p-4">Time</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {donations.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-6 text-center text-gray-500">
                  No donation appointments found
                </td>
              </tr>
            ) : (
              donations.map((donation, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">{donation.hospitalName}</td>
                  <td className="p-4">{donation.date}</td>
                  <td className="p-4">{donation.time}</td>
                  <td className="p-4">{donation.amount} ml</td>
                  <td className="p-4">{donation.status}</td>
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