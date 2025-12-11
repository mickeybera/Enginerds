import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const loadEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events");
      setEvents(res.data);
    } catch (error) {
      console.log("Error loading events", error);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });

      alert("Event deleted successfully!");
      loadEvents();
    } catch (error) {
      alert("Failed to delete event");
      console.log(error);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/admin/events/update/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 p-10 text-white relative overflow-hidden">

      {/* Neon Background Orbs */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <h2 className="text-4xl font-extrabold mb-10 tracking-wider drop-shadow-xl">
        Manage Events
      </h2>

      <div className="space-y-6">
        {events.map((evt) => (
          <div
            key={evt._id}
            className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-all duration-300 hover:border-purple-500/40"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white tracking-wide">
                {evt.name}
              </h3>
              <span className="px-4 py-1 bg-purple-600/30 border border-purple-500/40 rounded-full text-sm">
                {evt.date}
              </span>
            </div>

            <p className="mt-3 text-gray-300">{evt.description}</p>

            <div className="flex gap-4 mt-6">

              {/* Update */}
              <button
                onClick={() => handleUpdate(evt._id)}
                className="px-5 py-2 rounded-xl font-semibold bg-yellow-500/20 border border-yellow-400/40 text-yellow-300
                hover:bg-yellow-500/30 hover:scale-105 transition-all duration-300"
              >
                Update
              </button>

              {/* Delete */}
              <button
                onClick={() => handleDelete(evt._id)}
                className="px-5 py-2 rounded-xl font-semibold bg-red-500/20 border border-red-400/40 text-red-300
                hover:bg-red-500/30 hover:scale-105 transition-all duration-300"
              >
                Delete
              </button>

              {/* View Participants */}
              <button
                onClick={() => navigate(`/admin/events/participants/${evt._id}`)}
                className="px-5 py-2 rounded-xl font-semibold bg-green-500/20 border border-green-400/40 text-green-300
                hover:bg-green-500/30 hover:scale-105 transition-all duration-300"
              >
                View Participants
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;
