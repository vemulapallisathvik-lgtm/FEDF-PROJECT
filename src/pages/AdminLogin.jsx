import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserShield, FaLock, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      username === "admin_bloodbank" &&
      password === "BloodBank@2026"
    ) {
      navigate("/dashboard");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black flex items-center justify-center relative overflow-hidden">

      <div className="absolute w-72 h-72 bg-red-600 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-red-800 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-xl border border-red-500/40 rounded-3xl shadow-2xl w-[430px] p-10 text-white relative z-10"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-red-600 p-5 rounded-full shadow-lg shadow-red-700/50">
            <FaUserShield className="text-5xl text-white" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-white">
          Admin Login
        </h1>

        <p className="text-center text-gray-300 mt-3">
          Secure access to Smart Blood Bank Dashboard
        </p>

        <div className="mt-8">
          <label className="text-gray-200 font-semibold">
            Username
          </label>

          <div className="flex items-center bg-white/90 rounded-xl px-4 mt-2">
            <FaUser className="text-red-600 mr-3" />

            <input
              type="text"
              placeholder="Enter admin username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 bg-transparent outline-none text-black"
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="text-gray-200 font-semibold">
            Password
          </label>

          <div className="flex items-center bg-white/90 rounded-xl px-4 mt-2">
            <FaLock className="text-red-600 mr-3" />

            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-transparent outline-none text-black"
            />
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="w-full mt-8 bg-red-600 hover:bg-red-700 transition py-3 rounded-xl text-lg font-bold shadow-lg shadow-red-700/40"
        >
          Login to Dashboard
        </button>

        <div className="mt-8 bg-black/30 rounded-xl p-4 text-sm text-gray-300 border border-white/10">
          <p className="text-center font-semibold text-red-300">
            Demo Credentials
          </p>

          <p className="mt-2">
            Username: <span className="text-white">admin_bloodbank</span>
          </p>

          <p>
            Password: <span className="text-white">BloodBank@2026</span>
          </p>
        </div>
      </motion.div>

    </div>
  );
}