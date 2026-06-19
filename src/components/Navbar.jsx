import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white text-black shadow-lg sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="text-red-600 text-2xl">🩸</span>
        <h1 className="font-bold text-xl">Smart Blood Bank</h1>
      </div>

      <div className="flex gap-8 font-medium">
        <Link to="/" className="hover:text-red-600 transition duration-300">
          Home
        </Link>

        <Link to="/about" className="hover:text-red-600 transition duration-300">
          About
        </Link>

        <Link to="/features" className="hover:text-red-600 transition duration-300">
          Features
        </Link>

        <Link to="/contact" className="hover:text-red-600 transition duration-300">
          Contact
        </Link>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => navigate("/donors")}
          className="border border-red-500 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition"
        >
          Donor
        </button>

        <button
          onClick={() => navigate("/admin-login")}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Admin Login
        </button>
      </div>
    </nav>
  );
}