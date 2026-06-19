import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BloodRequestAuth() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("");

  const demoUser = {
    username: "demo_user",
    password: "demo123",
    gender: "Male",
    age: "22",
    gmail: "demo@gmail.com",
    phone: "9876543210",
    address: "Hyderabad",
  };

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("bloodUsers");
    return savedUsers ? JSON.parse(savedUsers) : [demoUser];
  });

  const [signup, setSignup] = useState({
    username: "",
    password: "",
    gender: "",
    age: "",
    gmail: "",
    phone: "",
    address: "",
  });

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    localStorage.setItem("bloodUsers", JSON.stringify(users));
  }, [users]);

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      !signup.username ||
      !signup.password ||
      !signup.gender ||
      !signup.age ||
      !signup.gmail ||
      !signup.phone ||
      !signup.address
    ) {
      alert("Please fill all fields");
      return;
    }

    const userExists = users.find((u) => u.username === signup.username);

    if (userExists) {
      alert("Username already exists. Please login.");
      setMode("login");
      return;
    }

    const updatedUsers = [...users, signup];
    setUsers(updatedUsers);
    localStorage.setItem("bloodUsers", JSON.stringify(updatedUsers));

    alert("Signup successful! Now login.");

    setSignup({
      username: "",
      password: "",
      gender: "",
      age: "",
      gmail: "",
      phone: "",
      address: "",
    });

    setMode("login");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUsers = JSON.parse(localStorage.getItem("bloodUsers")) || [
      demoUser,
    ];

    const foundUser = savedUsers.find(
      (u) =>
        u.username === login.username.trim() &&
        u.password === login.password.trim()
    );

    if (foundUser) {
      alert("Login successful");
      navigate("/blood-request-form");
    } else {
      alert("Account not found or wrong password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 to-red-950 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Blood Request Portal
        </h1>

        {!mode && (
          <div className="space-y-4">
            <button
              onClick={() => setMode("signup")}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700"
            >
              Sign Up
            </button>

            <button
              onClick={() => setMode("login")}
              className="w-full border border-red-600 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-50"
            >
              Login
            </button>

            <div className="bg-red-50 p-4 rounded-lg text-sm text-red-700">
              <p>
                <b>Demo Username:</b> demo_user
              </p>
              <p>
                <b>Demo Password:</b> demo123
              </p>
            </div>
          </div>
        )}

        {mode === "signup" && (
          <form onSubmit={handleSignup} className="space-y-3">
            <input
              type="text"
              placeholder="Create Username"
              className="input"
              value={signup.username}
              onChange={(e) =>
                setSignup({ ...signup, username: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Create Password"
              className="input"
              value={signup.password}
              onChange={(e) =>
                setSignup({ ...signup, password: e.target.value })
              }
            />

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

            <input
              type="number"
              placeholder="Age"
              className="input"
              value={signup.age}
              onChange={(e) => setSignup({ ...signup, age: e.target.value })}
            />

            <input
              type="email"
              placeholder="Gmail"
              className="input"
              value={signup.gmail}
              onChange={(e) => setSignup({ ...signup, gmail: e.target.value })}
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="input"
              value={signup.phone}
              onChange={(e) => setSignup({ ...signup, phone: e.target.value })}
            />

            <textarea
              placeholder="Address"
              className="input"
              value={signup.address}
              onChange={(e) =>
                setSignup({ ...signup, address: e.target.value })
              }
            />

            <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold">
              Create Account
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
              type="text"
              placeholder="Username"
              className="input"
              value={login.username}
              onChange={(e) =>
                setLogin({ ...login, username: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              className="input"
              value={login.password}
              onChange={(e) =>
                setLogin({ ...login, password: e.target.value })
              }
            />

            <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold">
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