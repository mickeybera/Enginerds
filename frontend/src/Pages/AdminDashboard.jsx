import React from "react";
import { Link } from "react-router-dom";
import { FiPlusCircle, FiSettings, FiUsers } from "react-icons/fi";

const AdminDashboard = () => {
  return (
    <div className="p-10 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white animate-fadeIn">

      <h1 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-lg">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">

        {/* ADD EVENT */}
        <Link
          to="/admin/events/add"
          className="group p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 
          shadow-xl hover:shadow-purple-500/30 transition-all hover:-translate-y-1"
        >
          <div className="flex flex-col items-center gap-4">
            <FiPlusCircle className="text-5xl text-purple-400 group-hover:text-purple-300 transition" />
            <h2 className="text-2xl font-semibold">Add Event</h2>
            <p className="text-gray-300 text-center text-sm">
              Create new technical, cultural, gaming or coding event.
            </p>
          </div>
        </Link>

        {/* MANAGE EVENTS */}
        <Link
          to="/admin/manage-events"
          className="group p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 
          shadow-xl hover:shadow-green-500/30 transition-all hover:-translate-y-1"
        >
          <div className="flex flex-col items-center gap-4">
            <FiSettings className="text-5xl text-green-400 group-hover:text-green-300 transition" />
            <h2 className="text-2xl font-semibold">Manage Events</h2>
            <p className="text-gray-300 text-center text-sm">
              Edit, update, delete or organize events.
            </p>
          </div>
        </Link>

        {/* VIEW PARTICIPANTS */}
        <Link
          to="/admin/participants"
          className="group p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 
          shadow-xl hover:shadow-blue-500/30 transition-all hover:-translate-y-1"
        >
          <div className="flex flex-col items-center gap-4">
            <FiUsers className="text-5xl text-blue-400 group-hover:text-blue-300 transition" />
            <h2 className="text-2xl font-semibold">View Participants</h2>
            <p className="text-gray-300 text-center text-sm">
              Check all registered participants & download reports.
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default AdminDashboard;

