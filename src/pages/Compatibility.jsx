import { useState } from "react";

export default function Compatibility() {
  const bloodTypes = ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"];

  const compatibility = {
    "O-": ["O-"],
    "O+": ["O-", "O+"],
    "A-": ["O-", "A-"],
    "A+": ["O-", "O+", "A-", "A+"],
    "B-": ["O-", "B-"],
    "B+": ["O-", "O+", "B-", "B+"],
    "AB-": ["O-", "A-", "B-", "AB-"],
    "AB+": ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
  };

  const [recipient, setRecipient] = useState("A+");

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-red-600 text-white p-5">
        <h1 className="text-3xl font-bold">
          Smart Compatibility Matrix
        </h1>
      </div>

      <div className="p-8">
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h2 className="text-black text-xl font-bold mb-4">
            Select Recipient Blood Group
          </h2>

          <select
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="border p-3 rounded-lg text-black w-64"
          >
            {bloodTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>

          <p className="mt-4 text-gray-700">
            Recipient <b>{recipient}</b> can receive blood from the highlighted groups.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {bloodTypes.map((type) => {
            const isCompatible = compatibility[recipient].includes(type);

            return (
              <div
                key={type}
                className={
                  isCompatible
                    ? "bg-red-600 text-white p-8 rounded-2xl shadow-xl text-center scale-105"
                    : "bg-white text-gray-400 p-8 rounded-2xl shadow text-center opacity-40"
                }
              >
                <div className="text-5xl mb-3">🩸</div>
                <h2 className="text-4xl font-bold">{type}</h2>

                <p className="mt-3">
                  {isCompatible ? "Compatible" : "Not Compatible"}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-black mb-3">
            Important Rules
          </h2>

          <p className="text-gray-700">🩸 O- is the universal donor.</p>
          <p className="text-gray-700">🩸 AB+ is the universal recipient.</p>
        </div>
      </div>
    </div>
  );
}