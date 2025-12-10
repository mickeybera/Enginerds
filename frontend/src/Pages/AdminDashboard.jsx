import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-10 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <Link to="/admin/events/add" className="bg-blue-600 p-6 rounded-xl text-center hover:bg-blue-700">
          Add Event
        </Link>

        <Link to="/admin/manage-events" className="bg-green-600 p-6 rounded-xl text-center hover:bg-green-700">
          Manage Events
        </Link>

        <Link to="/admin/participants" className="bg-purple-600 p-6 rounded-xl text-center hover:bg-purple-700">
          View Participants
        </Link>

      </div>
    </div>
  );
};

export default AdminDashboard;
