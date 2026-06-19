import Navbar from "../components/Navbar";

export default function Features() {
  const features = [
    "Admin Login and Dashboard",
    "Donor Management with Add, Edit and Delete",
    "Blood Inventory Management",
    "Emergency Blood Requests",
    "Blood Compatibility Matrix",
    "Donor Eligibility Checker",
    "Cold Chain Temperature Monitoring",
    "Blood Packet Expiry Tracker",
    "Achievement System",
    "Analytics and Reports",
    "Live Map Tracking",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-10">
        <h1 className="text-4xl font-bold text-red-600 mb-8">
          System Features
        </h1>

        <div className="grid grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition"
            >
              <h2 className="text-xl font-bold text-black mb-3">
                🩸 {feature}
              </h2>

              <p className="text-gray-600">
                This feature helps improve blood bank management by making the
                system faster, safer, more organized, and easier to use.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}