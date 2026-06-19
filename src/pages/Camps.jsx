import { useState } from "react";

export default function Camps() {
  const [camps, setCamps] = useState([
    { id: 1, name: "Mega Blood Donation Camp", date: "2026-06-10", location: "City Hospital", organizer: "Red Cross" },
    { id: 2, name: "College Donation Drive", date: "2026-06-18", location: "ABC College", organizer: "NSS Team" },
  ]);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [organizer, setOrganizer] = useState("");

  const addCamp = () => {
    if (!name || !date || !location || !organizer) return;

    setCamps([
      ...camps,
      { id: Date.now(), name, date, location, organizer },
    ]);

    setName("");
    setDate("");
    setLocation("");
    setOrganizer("");
  };

  const deleteCamp = (id) => {
    setCamps(camps.filter((camp) => camp.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-red-600 text-white p-5">
        <h1 className="text-3xl font-bold">Blood Donation Camps</h1>
      </div>

      <div className="p-8">
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h2 className="text-xl font-bold text-black mb-4">Add New Camp</h2>

          <div className="grid grid-cols-4 gap-4">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Camp Name" className="border p-3 rounded text-black" />
            <input value={date} onChange={(e) => setDate(e.target.value)} type="date" className="border p-3 rounded text-black" />
            <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" className="border p-3 rounded text-black" />
            <input value={organizer} onChange={(e) => setOrganizer(e.target.value)} placeholder="Organizer" className="border p-3 rounded text-black" />
          </div>

          <button onClick={addCamp} className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg">
            Add Camp
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {camps.map((camp) => (
            <div key={camp.id} className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-red-600">{camp.name}</h2>
              <p className="text-black mt-2">📅 Date: {camp.date}</p>
              <p className="text-black">📍 Location: {camp.location}</p>
              <p className="text-black">👥 Organizer: {camp.organizer}</p>

              <button
                onClick={() => deleteCamp(camp.id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}