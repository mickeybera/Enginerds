import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Events from "./components/Events";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";
// import CreateEvent from "./Pages/CreateEvent";
import EditEvent from "./Pages/EditEvents";
import EventRegistrationModal from "./Pages/EventRegistrationModal";
import AddEvent from "./Pages/AddEvents";
import ManageEvents from "./Pages/ManageEvent";
import ProtectedRoute from "./components/ProtactRoute";
import ViewParticipants from "./Pages/ViewParticipants";
// import ViewParticipants from "./Pages/ViewParticipants";


const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleRegisterClick = (eventId) => {
    setSelectedEvent(eventId);
    setShowModal(true);
  };

  return (
    <>
      <Routes>
        {/* Frontend user-facing website */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Events onRegister={handleRegisterClick} />
              <About />
              <Contact />
              <Footer />
              <EventRegistrationModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                preSelectedEvent={selectedEvent}
              />
            </>
          }
        />

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/manage-events" element={<ManageEvents />} />
        <Route path="/admin/manage-events" element={<ManageEvents />} />
        <Route
  path="/admin/events/update/:id"
  element={
    <ProtectedRoute>
      <EditEvent />
    </ProtectedRoute>
  }
/>
        {/* Admin Protected Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/admin/events/create"
          element={
            <ProtectedRoute>
              <CreateEvent />
            </ProtectedRoute>
          }
        /> */}
         <Route
          path="/admin/events/add"
          element={
            <ProtectedRoute>
              <AddEvent />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/events/edit/:id"
          element={
            <ProtectedRoute>
              <EditEvent />
            </ProtectedRoute>
          }
        />
        <Route path="/admin/events/delete/:id" element={<selectedEvent />} />
        {/* <Route path="/admin/events/participants/:eventId" element={<ViewParticipants />} />
         */}
         {/* <Route path="/admin/events/:eventId/participants" element={<ViewParticipants />} /> */}
        <Route path="/admin/events/participants/:eventId" element={<ViewParticipants />} />


      </Routes>
    </>
  );
};

export default App;
