import React from "react";
import { Link } from "react-router-dom";
import { FiPlusCircle, FiSettings, FiUsers } from "react-icons/fi";

const AdminDashboard = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Cyber Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,255,0.08)_1px,transparent_1px)] bg-[length:28px_28px] opacity-10" />

      {/* Scan Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />

      <div className="relative z-10 p-10">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center tracking-wider">
          <span className="text-purple-400">ADMIN</span>{" "}
          <span className="text-blue-400">CONTROL</span>{" "}
          <span className="text-white">PANEL</span>
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {/* ADD EVENT */}
          <Link
            to="/admin/events/add"
            className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-purple-500/30 
            shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]
            transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0 rounded-3xl border border-purple-500/20 group-hover:border-purple-400/60 transition" />
            <div className="flex flex-col items-center gap-4 relative z-10">
              <FiPlusCircle className="text-6xl text-purple-400 group-hover:scale-110 transition" />
              <h2 className="text-2xl font-semibold">Add Event</h2>
              <p className="text-gray-400 text-center text-sm">
                Create new technical, cultural, gaming or coding events.
              </p>
            </div>
          </Link>

          {/* MANAGE EVENTS */}
          <Link
            to="/admin/manage-events"
            className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-green-500/30 
            shadow-[0_0_25px_rgba(34,197,94,0.2)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)]
            transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0 rounded-3xl border border-green-500/20 group-hover:border-green-400/60 transition" />
            <div className="flex flex-col items-center gap-4 relative z-10">
              <FiSettings className="text-6xl text-green-400 group-hover:rotate-12 transition" />
              <h2 className="text-2xl font-semibold">Manage Events</h2>
              <p className="text-gray-400 text-center text-sm">
                Edit, update, delete or organize events.
              </p>
            </div>
          </Link>

          {/* VIEW PARTICIPANTS */}
          <Link
            to="/admin/participants"
            className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-blue-500/30 
            shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]
            transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0 rounded-3xl border border-blue-500/20 group-hover:border-blue-400/60 transition" />
            <div className="flex flex-col items-center gap-4 relative z-10">
              <FiUsers className="text-6xl text-blue-400 group-hover:scale-110 transition" />
              <h2 className="text-2xl font-semibold">View Participants</h2>
              <p className="text-gray-400 text-center text-sm">
                Check all registered participants & download reports.
              </p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
