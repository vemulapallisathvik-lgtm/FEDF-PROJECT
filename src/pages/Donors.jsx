import { useState } from "react";

export default function Donors() {
  const [donors, setDonors] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      blood: "O+",
      donations: 4,
      lives: 12,
      eligible: "Yes",
    },
    {
      id: 2,
      name: "Priya Patel",
      blood: "A+",
      donations: 2,
      lives: 6,
      eligible: "No",
    },
  ]);

  const [name, setName] = useState("");
  const [blood, setBlood] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleAddOrUpdate = () => {
    if (!name || !blood) return;

    if (editingId) {
      setDonors(
        donors.map((donor) =>
          donor.id === editingId
            ? { ...donor, name, blood }
            : donor
        )
      );

      setEditingId(null);
    } else {
      const newDonor = {
        id: Date.now(),
        name,
        blood,
        donations: 0,
        lives: 0,
        eligible: "Yes",
      };

      setDonors([...donors, newDonor]);
    }

    setName("");
    setBlood("");
  };

  const handleDelete = (id) => {
    setDonors(
      donors.filter((donor) => donor.id !== id)
    );
  };

  const handleEdit = (donor) => {
    setName(donor.name);
    setBlood(donor.blood);
    setEditingId(donor.id);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-red-600 text-white p-5">
        <h1 className="text-3xl font-bold">
          Donor Management
        </h1>
      </div>

      <div className="p-8">

        <div className="bg-white p-6 rounded-xl shadow mb-6">

          <h2 className="text-xl font-bold mb-4 text-black">
            {editingId ? "Edit Donor" : "Add Donor"}
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Donor Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-3 rounded-lg text-black"
            />

            <input
              type="text"
              placeholder="Blood Group"
              value={blood}
              onChange={(e) => setBlood(e.target.value)}
              className="border p-3 rounded-lg text-black"
            />

          </div>

          <button
            onClick={handleAddOrUpdate}
            className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg"
          >
            {editingId ? "Update Donor" : "Add Donor"}
          </button>

        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full">

            <thead className="bg-red-600 text-white">

              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Blood Group</th>
                <th className="p-4">Donations</th>
                <th className="p-4">Lives Saved</th>
                <th className="p-4">Eligible</th>
                <th className="p-4">Actions</th>
              </tr>

            </thead>

            <tbody>

              {donors.map((donor) => (
                <tr
                  key={donor.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4 text-black">
                    {donor.name}
                  </td>

                  <td className="p-4 font-bold text-red-600">
                    {donor.blood}
                  </td>

                  <td className="p-4 text-black">
                    {donor.donations}
                  </td>

                  <td className="p-4 text-black">
                    {donor.lives}
                  </td>

                  <td className="p-4 text-black">
                    {donor.eligible}
                  </td>

                  <td className="p-4 flex gap-2">

                    <button
                      onClick={() => handleEdit(donor)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(donor.id)}
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