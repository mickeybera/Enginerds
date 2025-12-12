import React, { useEffect, useState } from "react";
import axios from "axios";

const Participants = () => {
  const [data, setData] = useState([]);

  const load = async () => {
    const res = await axios.get("https://enginerds-1gc2.onrender.com/api/participants");
    setData(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="p-10 bg-gray-900 min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-6">Participants</h2>

      <div className="space-y-4">
        {data.map((p) => (
          <div key={p._id} className="bg-gray-800 p-5 rounded-xl">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p>Email: {p.email}</p>
            <p>Phone: {p.phone}</p>
            <p>Event: {p.eventId}</p>

            {p.screenshot && (
              <img
                src={`https://enginerds-1gc2.onrender.com/${p.screenshot}`}
                className="w-32 mt-3 rounded"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Participants;
