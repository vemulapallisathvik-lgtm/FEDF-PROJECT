import { useState } from "react";

export default function Hospitals() {
  const [hospitals, setHospitals] = useState([
    { id: 1, name: "Apollo Hospital", location: "Hyderabad", contact: "9876543210", bloodStock: "O+, A+, B+" },
    { id: 2, name: "City Hospital", location: "Secunderabad", contact: "9123456780", bloodStock: "O-, AB+, A-" },
  ]);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [bloodStock, setBloodStock] = useState("");

  const addHospital = () => {
    if (!name || !location || !contact || !bloodStock) return;

    setHospitals([
      ...hospitals,
      { id: Date.now(), name, location, contact, bloodStock },
    ]);

    setName("");
    setLocation("");
    setContact("");
    setBloodStock("");
  };

  const deleteHospital = (id) => {
    setHospitals(hospitals.filter((hospital) => hospital.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-red-600 text-white p-5">
        <h1 className="text-3xl font-bold">Hospital Management</h1>
      </div>

      <div className="p-8">
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h2 className="text-xl font-bold text-black mb-4">Add Hospital</h2>

          <div className="grid grid-cols-4 gap-4">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Hospital Name" className="border p-3 rounded text-black" />
            <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" className="border p-3 rounded text-black" />
            <input value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contact" className="border p-3 rounded text-black" />
            <input value={bloodStock} onChange={(e) => setBloodStock(e.target.value)} placeholder="Blood Stock" className="border p-3 rounded text-black" />
          </div>

          <button onClick={addHospital} className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg">
            Add Hospital
          </button>
        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="p-4">Hospital</th>
                <th className="p-4">Location</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Blood Stock</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {hospitals.map((hospital) => (
                <tr key={hospital.id} className="border-b text-black">
                  <td className="p-4">{hospital.name}</td>
                  <td className="p-4">{hospital.location}</td>
                  <td className="p-4">{hospital.contact}</td>
                  <td className="p-4 text-red-600 font-bold">{hospital.bloodStock}</td>
                  <td className="p-4">
                    <button
                      onClick={() => deleteHospital(hospital.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}