import { useState } from "react";

export default function EmergencyRequests() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      hospital: "Apollo Hospital",
      blood: "O-",
      priority: "Critical",
      status: "Pending",
    },
    {
      id: 2,
      hospital: "City Hospital",
      blood: "A+",
      priority: "High",
      status: "Approved",
    },
  ]);

  const [hospital, setHospital] = useState("");
  const [blood, setBlood] = useState("");
  const [priority, setPriority] = useState("High");
  const [editingId, setEditingId] = useState(null);

  const handleAddOrUpdate = () => {
    if (!hospital || !blood) return;

    if (editingId) {
      setRequests(
        requests.map((req) =>
          req.id === editingId
            ? {
                ...req,
                hospital,
                blood,
                priority,
              }
            : req
        )
      );

      setEditingId(null);
    } else {
      setRequests([
        ...requests,
        {
          id: Date.now(),
          hospital,
          blood,
          priority,
          status: "Pending",
        },
      ]);
    }

    setHospital("");
    setBlood("");
    setPriority("High");
  };

  const handleDelete = (id) => {
    setRequests(
      requests.filter((req) => req.id !== id)
    );
  };

  const handleEdit = (req) => {
    setHospital(req.hospital);
    setBlood(req.blood);
    setPriority(req.priority);
    setEditingId(req.id);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-red-600 text-white p-5">
        <h1 className="text-3xl font-bold">
          Emergency Requests
        </h1>
      </div>

      <div className="p-8">

        <div className="bg-white p-6 rounded-xl shadow mb-6">

          <h2 className="text-xl text-black font-bold mb-4">
            {editingId
              ? "Update Request"
              : "Create Request"}
          </h2>

          <div className="grid grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Hospital Name"
              value={hospital}
              onChange={(e) =>
                setHospital(e.target.value)
              }
              className="border p-3 rounded-lg text-black"
            />

            <input
              type="text"
              placeholder="Blood Group"
              value={blood}
              onChange={(e) =>
                setBlood(e.target.value)
              }
              className="border p-3 rounded-lg text-black"
            />

            <select
              value={priority}
              onChange={(e) =>
                setPriority(e.target.value)
              }
              className="border p-3 rounded-lg text-black"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Critical</option>
            </select>

          </div>

          <button
            onClick={handleAddOrUpdate}
            className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg"
          >
            {editingId
              ? "Update Request"
              : "Create Request"}
          </button>

        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full">

            <thead className="bg-red-600 text-white">

              <tr>
                <th className="p-4">Hospital</th>
                <th className="p-4">Blood Group</th>
                <th className="p-4">Priority</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>

            </thead>

            <tbody>

              {requests.map((req) => (
                <tr key={req.id} className="border-b">

                  <td className="p-4 text-black">
                    {req.hospital}
                  </td>

                  <td className="p-4 text-red-600 font-bold">
                    {req.blood}
                  </td>

                  <td className="p-4 text-black">
                    {req.priority}
                  </td>

                  <td className="p-4 text-black">
                    {req.status}
                  </td>

                  <td className="p-4 flex gap-2">

                    <button
                      onClick={() =>
                        handleEdit(req)
                      }
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(req.id)
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