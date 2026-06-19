import { useState } from "react";

export default function BloodInventory() {
  const [inventory, setInventory] = useState([
    { id: 1, group: "O+", units: 120 },
    { id: 2, group: "O-", units: 15 },
    { id: 3, group: "A+", units: 80 },
    { id: 4, group: "B+", units: 65 },
  ]);

  const [bloodGroup, setBloodGroup] = useState("");
  const [units, setUnits] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleAddOrUpdate = () => {
    if (!bloodGroup || !units) return;

    if (editingId) {
      setInventory(
        inventory.map((item) =>
          item.id === editingId
            ? {
                ...item,
                group: bloodGroup,
                units: Number(units),
              }
            : item
        )
      );

      setEditingId(null);
    } else {
      setInventory([
        ...inventory,
        {
          id: Date.now(),
          group: bloodGroup,
          units: Number(units),
        },
      ]);
    }

    setBloodGroup("");
    setUnits("");
  };

  const handleDelete = (id) => {
    setInventory(
      inventory.filter((item) => item.id !== id)
    );
  };

  const handleEdit = (item) => {
    setBloodGroup(item.group);
    setUnits(item.units);
    setEditingId(item.id);
  };

  const getStatus = (units) => {
    if (units <= 10) return "🚨 Critical";
    if (units <= 25) return "⚠️ Low Stock";
    return "✅ Healthy";
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-red-600 text-white p-5">
        <h1 className="text-3xl font-bold">
          Blood Inventory Management
        </h1>
      </div>

      <div className="p-8">

        <div className="bg-white p-6 rounded-xl shadow mb-6">

          <h2 className="text-xl font-bold text-black mb-4">
            {editingId
              ? "Update Blood Stock"
              : "Add Blood Stock"}
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Blood Group"
              value={bloodGroup}
              onChange={(e) =>
                setBloodGroup(e.target.value)
              }
              className="border p-3 rounded-lg text-black"
            />

            <input
              type="number"
              placeholder="Units"
              value={units}
              onChange={(e) =>
                setUnits(e.target.value)
              }
              className="border p-3 rounded-lg text-black"
            />

          </div>

          <button
            onClick={handleAddOrUpdate}
            className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg"
          >
            {editingId
              ? "Update Inventory"
              : "Add Inventory"}
          </button>

        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">
              Blood Types
            </h2>
            <p className="text-4xl text-red-600 font-bold">
              {inventory.length}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">
              Total Units
            </h2>
            <p className="text-4xl text-green-600 font-bold">
              {inventory.reduce(
                (sum, item) => sum + item.units,
                0
              )}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">
              Critical Stocks
            </h2>
            <p className="text-4xl text-red-600 font-bold">
              {
                inventory.filter(
                  (item) => item.units <= 10
                ).length
              }
            </p>
          </div>

        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full">

            <thead className="bg-red-600 text-white">

              <tr>
                <th className="p-4">Blood Group</th>
                <th className="p-4">Units</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>

            </thead>

            <tbody>

              {inventory.map((item) => (
                <tr
                  key={item.id}
                  className="border-b"
                >
                  <td className="p-4 text-black font-bold">
                    {item.group}
                  </td>

                  <td className="p-4 text-black">
                    {item.units}
                  </td>

                  <td className="p-4">
                    {getStatus(item.units)}
                  </td>

                  <td className="p-4 flex gap-2">

                    <button
                      onClick={() =>
                        handleEdit(item)
                      }
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(item.id)
                      }
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