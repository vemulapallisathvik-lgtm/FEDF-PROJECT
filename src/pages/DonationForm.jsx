import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DonationForm() {
  const navigate = useNavigate();
  const { hospitalName } = useParams();

  const [form, setForm] = useState({
    date: "",
    time: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const donation = {
      hospitalName: decodeURIComponent(hospitalName),
      ...form,
      status: "Scheduled",
    };

    const oldDonations =
      JSON.parse(localStorage.getItem("donationAppointments")) || [];

    localStorage.setItem(
      "donationAppointments",
      JSON.stringify([...oldDonations, donation])
    );

    alert("Blood donation appointment scheduled successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 via-red-500 to-pink-500 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8"
      >
        <h1 className="text-3xl font-extrabold text-center text-red-600 mb-3">
          Donation Appointment
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Hospital:{" "}
          <span className="font-bold text-red-600">
            {decodeURIComponent(hospitalName)}
          </span>
        </p>

        <div className="space-y-4">
          <input
            type="date"
            className="input"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
          />

          <input
            type="time"
            className="input"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            required
          />

          <input
            type="number"
            className="input"
            placeholder="Amount of Blood in ml"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            required
          />

          <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700">
            Confirm Donation
          </button>

          <button
            type="button"
            onClick={() => navigate("/donor-hospitals")}
            className="w-full border border-red-600 text-red-600 py-3 rounded-xl font-bold hover:bg-red-50"
          >
            Back to Hospitals
          </button>
        </div>
      </form>
    </div>
  );
}