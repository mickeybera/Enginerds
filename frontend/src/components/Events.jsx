import React, { useEffect, useState } from "react";
import axios from "axios";
import EventRegistrationModal from "../Pages/EventRegistrationModal";
import MatrixRain from "../Pages/MatrixRain";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(
          "https://enginerds-1gc2.onrender.com/api/events"
        );
        setEvents(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEvents();
  }, []);

  const openModal = (eventId) => {
    setSelectedEventId(eventId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEventId(null);
  };

  return (
    <section
      id="events"
      className="relative w-full py-28 px-6 bg-black overflow-hidden"
    >
      <MatrixRain />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,255,0.06)_1px,transparent_1px)] bg-[length:32px_32px] opacity-20"></div>

      {/* Glow Orbs */}
      <div className="absolute -top-40 left-20 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-20 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"></div>

      {/* Section Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider text-white">
          CYBER{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            EVENTS
          </span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Compete in next-gen challenges designed for hackers, gamers,
          innovators, and tech warriors.
        </p>
      </div>

      {/* Events Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* 🔥 TECHY EMPTY STATE */}
        {events.length === 0 ? (
          <div className="col-span-full flex justify-center">
            <div className="relative max-w-xl w-full p-8 rounded-2xl bg-black/60 border border-cyan-400/30 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.25)]">

              {/* Scan Line */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 animate-pulse"></div>
              </div>

              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="ml-3 text-sm font-mono text-cyan-400">
                  system://events.scan
                </span>
              </div>

              {/* Terminal Text */}
              <p className="font-mono text-sm text-cyan-300 leading-relaxed">
                <span className="text-purple-400">[INFO]</span> Scanning event database...
                <br />
                <span className="text-purple-400">[WARN]</span> No active events found
                <br />
                <span className="text-purple-400">[STATUS]</span> Awaiting deployment 🚀
              </p>

              <p className="mt-5 text-center text-gray-400 text-sm">
                New cyber events will be deployed soon.
              </p>
            </div>
          </div>
        ) : (
          events.map((event) => (
            <div
              key={event._id}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.04] transition-all duration-300"
            >
              {/* Neon Border */}
              <div className="absolute inset-0 rounded-3xl border border-cyan-400/20 group-hover:border-purple-500/40 transition"></div>

              {/* ✅ Image (Fully Visible) */}
              <div className="w-full h-56 bg-black/60 flex items-center justify-center">
                <img
                  src={`https://enginerds-1gc2.onrender.com/${event.eventImage}`}
                  alt={event.name}
                  className="max-h-full max-w-full object-contain p-3"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {event.name}
                </h3>

                <p className="text-gray-400 text-sm mb-5 line-clamp-3">
                  {event.description}
                </p>

                <button
                  onClick={() => openModal(event._id)}
                  className="hover:cursor-pointer w-full py-2.5 rounded-xl border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 text-white font-semibold shadow-lg hover:scale-105 transition"
                >
                  REGISTER
                </button>
              </div>

              {/* HUD Corners */}
              <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-cyan-400"></span>
              <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-purple-400"></span>
              <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-purple-400"></span>
              <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-cyan-400"></span>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
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
