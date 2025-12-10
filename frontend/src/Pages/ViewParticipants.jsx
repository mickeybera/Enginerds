import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewParticipants = () => {
  const { eventId } = useParams();
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/participants/event/${eventId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
            },
          }
        );

        // ✅ FIXED: use participants array only
        setParticipants(res.data.participants || []);
      } catch (err) {
        console.log("Error fetching participants:", err);
        setParticipants([]); // avoid crash
      }
    };

    fetchParticipants();
  }, [eventId]);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Participants of Event</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
          </tr>
        </thead>

        <tbody>
          {participants.length === 0 ? (
            <tr>
              <td className="p-3 text-center border" colSpan="3">
                No participants yet
              </td>
            </tr>
          ) : (
            participants.map((p) => (
              <tr key={p._id}>
                <td className="p-2 border">{p.name}</td>
                <td className="p-2 border">{p.email}</td>
                <td className="p-2 border">{p.phone}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewParticipants;
