import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BloodRequestForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    patientName: "",
    age: "",
    bloodGroup: "",
    gender: "",
    quantity: "",
    hospitalName: "",
    hospitalAddress: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRequest = {
      ...form,
      status: "Pending",
      requestDate: new Date().toLocaleString(),
    };

    const oldRequests =
      JSON.parse(localStorage.getItem("bloodRequests")) || [];

    const updatedRequests = [...oldRequests, newRequest];

    localStorage.setItem("bloodRequests", JSON.stringify(updatedRequests));

    alert("Blood request submitted successfully!");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl p-8"
      >
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Patient Blood Request
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Patient Name"
            className="input"
            value={form.patientName}
            onChange={(e) =>
              setForm({ ...form, patientName: e.target.value })
            }
            required
          />

          <input
            type="number"
            placeholder="Patient Age"
            className="input"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
            required
          />

          <select
            className="input"
            value={form.bloodGroup}
            onChange={(e) => setForm({ ...form, bloodGroup: e.target.value })}
            required
          >
            <option value="">Select Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>

          <select
            className="input"
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            type="number"
            placeholder="Quantity of Blood Required"
            className="input"
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            required
          />

          <input
            type="text"
            placeholder="Admitted Hospital Name"
            className="input"
            value={form.hospitalName}
            onChange={(e) =>
              setForm({ ...form, hospitalName: e.target.value })
            }
            required
          />

          <textarea
            placeholder="Hospital Address"
            className="input"
            value={form.hospitalAddress}
            onChange={(e) =>
              setForm({ ...form, hospitalAddress: e.target.value })
            }
            required
          />

          <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700">
            Submit Blood Request
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full border border-red-600 text-red-600 py-3 rounded-lg font-semibold"
          >
            Back Home
          </button>
        </div>
      </form>
    </div>
  );
}