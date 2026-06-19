import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-red-50 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-4xl font-bold text-red-600 mb-6">
          About Smart Blood Bank
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Smart Blood Bank Management System is a modern web application
          designed to simplify blood donation, blood requests, hospital
          coordination, and inventory management.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The system helps donors register and schedule donations, patients
          request blood, and admins manage donors, inventory, hospitals,
          emergency requests, and analytics efficiently.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700"
        >
          Back Home
        </button>
      </div>
    </div>
  );
}