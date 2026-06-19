import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <nav className="h-20 flex items-center justify-between px-12 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🩸</span>
          <h1 className="text-2xl font-bold">Smart Blood Bank</h1>
        </div>

        <div className="flex items-center gap-10">
          <button onClick={() => navigate("/")} className="hover:text-red-600">
            Home
          </button>

          <button onClick={() => navigate("/about")} className="hover:text-red-600">
            About
          </button>

          <button onClick={() => navigate("/features")} className="hover:text-red-600">
            Features
          </button>

          <button onClick={() => navigate("/contact")} className="hover:text-red-600">
            Contact
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/donor-auth")}
            className="border border-red-500 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50"
          >
            Donor
          </button>

          <button
            onClick={() => navigate("/admin-login")}
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700"
          >
            Admin Login
          </button>
        </div>
      </nav>

      <section className="min-h-[90vh] bg-gradient-to-r from-red-950 via-red-700 to-red-600 flex items-center justify-between px-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-7xl font-extrabold leading-tight mb-8">
            SMART BLOOD
            <br />
            BANK
            <br />
            MANAGEMENT
            <br />
            SYSTEM
          </h1>

          <p className="text-2xl leading-relaxed mb-10">
            A smart and modern solution to manage blood bank operations,
            donors, inventory and emergency requests efficiently.
          </p>

          <div className="flex gap-5">
            <button
              onClick={() => navigate("/blood-request-auth")}
              className="bg-red-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-500 transition"
            >
              Request Blood
            </button>

            <button
              onClick={() => navigate("/donor-auth")}
              className="border border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-red-600 transition"
            >
              Register as Donor
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="text-[180px] animate-pulse">🩸</div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10 py-12 bg-gray-50">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-5xl font-bold text-red-600">1250+</h2>
          <p className="text-lg mt-2">Donors</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-5xl font-bold text-red-600">850+</h2>
          <p className="text-lg mt-2">Blood Units</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-5xl font-bold text-red-600">120+</h2>
          <p className="text-lg mt-2">Hospitals</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-5xl font-bold text-red-600">300+</h2>
          <p className="text-lg mt-2">Requests</p>
        </div>
      </section>
    </div>
  );
}