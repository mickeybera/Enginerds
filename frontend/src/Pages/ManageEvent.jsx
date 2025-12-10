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
    <div className="p-10 bg-gray-900 min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-6">Manage Events</h2>

      <div className="space-y-4">
        {events.map((evt) => (
          <div
            key={evt._id}
            className="bg-gray-800 p-5 rounded-xl shadow-md border border-gray-700"
          >
            <h3 className="text-xl font-bold">{evt.title}</h3>

            <p className="mt-1 text-gray-300">Date: {evt.date}</p>
            <p className="mt-2 text-gray-400">{evt.description}</p>

            <div className="flex gap-4 mt-4">
              {/* UPDATE BUTTON */}
              <button
                onClick={() => handleUpdate(evt._id)}
                className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded font-medium"
              >
                Update
              </button>

              {/* DELETE BUTTON */}
              <button
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-medium"
                onClick={() => handleDelete(evt._id)}
              >
                Delete
              </button>
              <button
                onClick={() =>
                  navigate(`/admin/events/participants/${evt._id}`)
                }
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-medium"
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
