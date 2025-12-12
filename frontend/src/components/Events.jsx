import React, { useEffect, useState } from "react";
import axios from "axios";
import EventRegistrationModal from "../Pages/EventRegistrationModal";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  // Fetch events from backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("https://enginerds-1gc2.onrender.com/api/events");
        setEvents(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEvents();
  }, []);

  // Open modal for selected event
  const openModal = (eventId) => {
    setSelectedEventId(eventId);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedEventId(null);
  };

  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <h2 className="text-4xl text-white font-bold mb-12 text-center">Events</h2>

      {events.length === 0 ? (
        <p className="text-gray-300 text-center text-lg">
          No events have been added yet. Please check back later.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white/10 rounded-3xl shadow-2xl overflow-hidden glass-card hover:scale-105 transform transition"
            >
              <img
                src={`https://enginerds-1gc2.onrender.com/${event.eventImage}`}
                alt={event.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl text-white font-bold mb-2">{event.name}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <p className="text-gray-300 mb-4">{event.price}</p>
                <button
                  onClick={() => openModal(event._id)}
                  className="w-full py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition"
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Event Registration Modal */}
      {modalOpen && (
        <EventRegistrationModal
          isOpen={modalOpen}
          onClose={closeModal}
          preSelectedEvent={selectedEventId}
        />
      )}
    </section>
  );
};

export default Events;
