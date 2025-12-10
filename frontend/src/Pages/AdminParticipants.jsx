import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminParticipants = ({ eventId }) => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/register/participants/${eventId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
            },
          }
        );
        setParticipants(res.data);
      } catch (err) {
        console.error("Error fetching participants:", err);
      } finally {
        setLoading(false);
      }
    };

    if (eventId) fetchParticipants();
  }, [eventId]);

  if (loading) return <p className="text-white">Loading participants...</p>;

  return (
    <div className="p-6 bg-[#0f0c29] rounded-2xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold text-white mb-4">Participants</h2>
      {participants.length === 0 ? (
        <p className="text-gray-300">No registrations yet.</p>
      ) : (
        <table className="w-full text-left text-white">
          <thead>
            <tr>
              <th className="border-b border-gray-500 p-2">Name</th>
              <th className="border-b border-gray-500 p-2">Email</th>
              <th className="border-b border-gray-500 p-2">Phone</th>
              <th className="border-b border-gray-500 p-2">Event Name</th>
              <th className="border-b border-gray-500 p-2">Payment Screenshot</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((p) => (
              <tr key={p._id} className="hover:bg-white/10">
                <td className="p-2">{p.name}</td>
                <td className="p-2">{p.email}</td>
                <td className="p-2">{p.phone}</td>
                <td className="p-2">{p.eventName}</td>
                <td className="p-2">
                  {p.paymentScreenshot ? (
                    <a
                      href={`http://localhost:5000/${p.paymentScreenshot}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 underline"
                    >
                      View
                    </a>
                  ) : (
                    "Not uploaded"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminParticipants;
