import { useState } from "react";

export default function SmartFeatures() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [lastDonation, setLastDonation] = useState("");
  const [eligibility, setEligibility] = useState("");

  const [temperature, setTemperature] = useState(4);

  const donors = [
    { name: "Rahul Sharma", donations: 2 },
    { name: "Priya Patel", donations: 6 },
    { name: "Arjun Reddy", donations: 12 },
    { name: "Sneha Verma", donations: 22 },
  ];

  const packets = [
    { id: "B1024", group: "O-", expiryDays: 24 },
    { id: "B1095", group: "A+", expiryDays: 2 },
    { id: "B0981", group: "B+", expiryDays: 0 },
  ];

  const checkEligibility = () => {
    if (!age || !weight || !lastDonation) {
      setEligibility("Please fill all fields");
      return;
    }

    const today = new Date();
    const lastDate = new Date(lastDonation);
    const diffDays = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));
    const waitDays = 56 - diffDays;

    if (age >= 18 && weight >= 50 && diffDays >= 56) {
      setEligibility("✅ Eligible to Donate Blood");
    } else if (age < 18) {
      setEligibility("❌ Not eligible: Age must be 18+");
    } else if (weight < 50) {
      setEligibility("❌ Not eligible: Weight must be 50kg+");
    } else {
      setEligibility(`⏳ Not eligible yet. Wait ${waitDays} more days`);
    }
  };

  const getBadge = (donations) => {
    if (donations >= 20) return "💎 Platinum Donor";
    if (donations >= 10) return "🥇 Gold Donor";
    if (donations >= 5) return "🥈 Silver Donor";
    if (donations >= 1) return "🥉 Bronze Donor";
    return "New Donor";
  };

  const getTempStatus = () => {
    if (temperature >= 2 && temperature <= 6) return "✅ Safe Temperature";
    if (temperature > 6 && temperature <= 8) return "⚠️ Warning";
    return "🚨 Critical Alert";
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-red-600 text-white p-5">
        <h1 className="text-3xl font-bold">
          Smart Blood Bank Features
        </h1>
      </div>

      <div className="p-8 grid grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-black mb-4">
            Donor Eligibility Checker
          </h2>

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full border p-3 rounded-lg mb-3 text-black"
          />

          <input
            type="number"
            placeholder="Weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border p-3 rounded-lg mb-3 text-black"
          />

          <label className="text-black">Last Donation Date</label>
          <input
            type="date"
            value={lastDonation}
            onChange={(e) => setLastDonation(e.target.value)}
            className="w-full border p-3 rounded-lg mb-3 text-black"
          />

          <button
            onClick={checkEligibility}
            className="bg-red-600 text-white px-5 py-2 rounded-lg"
          >
            Check Eligibility
          </button>

          {eligibility && (
            <p className="mt-4 text-xl font-bold text-black">
              {eligibility}
            </p>
          )}
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-black mb-4">
            Achievement System
          </h2>

          <div className="space-y-4">
            {donors.map((donor, index) => (
              <div
                key={index}
                className="border rounded-xl p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-black font-bold">{donor.name}</h3>
                  <p className="text-gray-600">
                    Donations: {donor.donations}
                  </p>
                </div>

                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold">
                  {getBadge(donor.donations)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-black mb-4">
            Cold Chain Temperature Monitor
          </h2>

          <p className="text-5xl font-bold text-red-600">
            {temperature}°C
          </p>

          <p className="text-xl font-bold text-black mt-3">
            {getTempStatus()}
          </p>

          <div className="flex gap-3 mt-5">
            <button
              onClick={() => setTemperature(4)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Safe
            </button>

            <button
              onClick={() => setTemperature(7)}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
            >
              Warning
            </button>

            <button
              onClick={() => setTemperature(10)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Critical
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-black mb-4">
            Blood Packet Expiry Tracker
          </h2>

          <div className="space-y-4">
            {packets.map((packet) => (
              <div
                key={packet.id}
                className={
                  packet.expiryDays === 0
                    ? "border-l-8 border-red-600 bg-red-50 p-4 rounded-xl"
                    : packet.expiryDays <= 3
                    ? "border-l-8 border-yellow-500 bg-yellow-50 p-4 rounded-xl"
                    : "border-l-8 border-green-600 bg-green-50 p-4 rounded-xl"
                }
              >
                <h3 className="text-black font-bold">
                  Packet #{packet.id}
                </h3>

                <p className="text-gray-700">
                  Blood Group: {packet.group}
                </p>

                <p className="font-bold text-black">
                  {packet.expiryDays === 0
                    ? "🚨 Expired"
                    : `Expires in ${packet.expiryDays} days`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}