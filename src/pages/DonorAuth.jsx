import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DonorAuth() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("");

  const demoDonor = {
    username: "donor_demo",
    password: "donor123",
    age: "25",
    bloodGroup: "O+",
    gender: "Male",
    healthStatus: "Healthy",
  };

  const [donors, setDonors] = useState(() => {
    const saved = localStorage.getItem("donorUsers");
    return saved ? JSON.parse(saved) : [demoDonor];
  });

  const [signup, setSignup] = useState({
    username: "",
    password: "",
    age: "",
    bloodGroup: "",
    gender: "",
    healthStatus: "",
  });

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    localStorage.setItem("donorUsers", JSON.stringify(donors));
  }, [donors]);

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      !signup.username ||
      !signup.password ||
      !signup.age ||
      !signup.bloodGroup ||
      !signup.gender ||
      !signup.healthStatus
    ) {
      alert("Please fill all fields");
      return;
    }

    const exists = donors.find((d) => d.username === signup.username);

    if (exists) {
      alert("Username already exists. Please login.");
      setMode("login");
      return;
    }

    const updatedDonors = [...donors, signup];
    setDonors(updatedDonors);
    localStorage.setItem("donorUsers", JSON.stringify(updatedDonors));

    alert("Donor signup successful! Now login.");
    setMode("login");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const savedDonors = JSON.parse(localStorage.getItem("donorUsers")) || [
      demoDonor,
    ];

    const found = savedDonors.find(
      (d) =>
        d.username === login.username.trim() &&
        d.password === login.password.trim()
    );

    if (found) {
      alert("Donor login successful");
      navigate("/donor-hospitals");
    } else {
      alert("Account not found or wrong password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-800 via-red-600 to-pink-600 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">
        <h1 className="text-3xl font-extrabold text-center text-red-600 mb-6">
          Donor Portal
        </h1>

        {!mode && (
          <div className="space-y-4">
            <button
              onClick={() => setMode("signup")}
              className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700"
            >
              Donor Sign Up
            </button>

            <button
              onClick={() => setMode("login")}
              className="w-full border border-red-600 text-red-600 py-3 rounded-xl font-bold hover:bg-red-50"
            >
              Donor Login
            </button>

            <div className="bg-red-50 p-4 rounded-xl text-sm text-red-700">
              <p>
                <b>Demo Donor Username:</b> donor_demo
              </p>
              <p>
                <b>Demo Donor Password:</b> donor123
              </p>
            </div>
          </div>
        )}

        {mode === "signup" && (
          <form onSubmit={handleSignup} className="space-y-3">
            <input
              className="input"
              placeholder="Create Username"
              value={signup.username}
              onChange={(e) =>
                setSignup({ ...signup, username: e.target.value })
              }
            />

            <input
              className="input"
              type="password"
              placeholder="Create Password"
              value={signup.password}
              onChange={(e) =>
                setSignup({ ...signup, password: e.target.value })
              }
            />

            <input
              className="input"
              type="number"
              placeholder="Age"
              value={signup.age}
              onChange={(e) => setSignup({ ...signup, age: e.target.value })}
            />

            <select
              className="input"
              value={signup.bloodGroup}
              onChange={(e) =>
                setSignup({ ...signup, bloodGroup: e.target.value })
              }
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
              value={signup.gender}
              onChange={(e) => setSignup({ ...signup, gender: e.target.value })}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <select
              className="input"
              value={signup.healthStatus}
              onChange={(e) =>
                setSignup({ ...signup, healthStatus: e.target.value })
              }
            >
              <option value="">Select Health Status</option>
              <option>Healthy</option>
              <option>Recently Sick</option>
              <option>Under Medication</option>
              <option>Not Eligible Currently</option>
            </select>

            <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold">
              Create Donor Account
            </button>

            <button
              type="button"
              onClick={() => setMode("")}
              className="w-full text-red-600"
            >
              Back
            </button>
          </form>
        )}

        {mode === "login" && (
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              className="input"
              placeholder="Username"
              value={login.username}
              onChange={(e) =>
                setLogin({ ...login, username: e.target.value })
              }
            />

            <input
              className="input"
              type="password"
              placeholder="Password"
              value={login.password}
              onChange={(e) =>
                setLogin({ ...login, password: e.target.value })
              }
            />

            <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold">
              Login
            </button>

            <button
              type="button"
              onClick={() => setMode("")}
              className="w-full text-red-600"
            >
              Back
            </button>
          </form>
        )}
      </div>
    </div>
  );
}