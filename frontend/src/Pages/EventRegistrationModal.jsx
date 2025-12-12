import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const EventRegistrationModal = ({ isOpen, onClose, preSelectedEvent }) => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventId: preSelectedEvent || "",
    transactionId: "",
    paymentId: "",
    amountPaid: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedEventImage, setSelectedEventImage] = useState(null);
  const [selectedQRCode, setSelectedQRCode] = useState(null);

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/events");
        setEvents(res.data);

        if (preSelectedEvent) {
          const evt = res.data.find((e) => e._id === preSelectedEvent);
          if (evt) {
            setSelectedEventImage(evt.eventImage);
            setSelectedQRCode(evt.qrImage);
          }
        }
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };
    fetchEvents();
  }, [preSelectedEvent]);

  // Update selected event media
  useEffect(() => {
    const evt = events.find((e) => e._id === formData.eventId);
    if (evt) {
      setSelectedEventImage(evt.eventImage);
      setSelectedQRCode(evt.qrImage);
    }
  }, [formData.eventId, events]);

  // Input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!formData.eventId) {
      setMessage("Please select an event");
      setLoading(false);
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/register/create", formData);

      setMessage("Registration Successful!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        eventId: preSelectedEvent || "",
        transactionId: "",
        paymentId: "",
        amountPaid: "",
      });
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.error || "Registration Failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white/10 w-full max-w-md rounded-2xl p-5 shadow-2xl relative max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-white text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Event Registration
            </h2>

            {/* Status Message */}
            {message && (
              <p
                className={`text-center mb-3 ${
                  message.includes("Successful") ? "text-green-400" : "text-red-400"
                }`}
              >
                {message}
              </p>
            )}

            {/* Event Image */}
            {selectedEventImage && (
              <img
                src={`http://localhost:5000/${selectedEventImage}`}
                alt="Event"
                className="w-full h-32 object-cover rounded-xl mb-3"
              />
            )}

            {/* QR Image */}
            {selectedQRCode && (
              <div className="flex justify-center mb-3">
                <img
                  src={`http://localhost:5000/${selectedQRCode}`}
                  alt="QR Code"
                  className="w-28 h-28 object-contain rounded-xl shadow-lg"
                />
              </div>
            )}

            {/* Form */}
            <form className="space-y-3" onSubmit={handleSubmit}>
              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
              />

              {/* PHONE */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
              />

              {/* EVENT SELECT */}
              {/* <select
                name="eventId"
                value={formData.eventId}
                onChange={handleChange}
                required
                className="w-full p-2.5 rounded-xl bg-white/10 border border-white/20 text-white"
              >
                <option value="" className="text-black">
                  Select Event
                </option>

                {events.map((event) => (
                  <option
                    key={event._id}
                    value={event._id}
                    className="text-black"
                  >
                    {event.title}
                  </option>
                ))}
              </select> */}

              {/* TRANSACTION ID */}
              <input
                type="text"
                name="transactionId"
                placeholder="Transaction ID"
                value={formData.transactionId}
                onChange={handleChange}
                required
                className="w-full p-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
              />

              {/* PAYMENT ID */}
              <input
                type="text"
                name="paymentId"
                placeholder="UPI Reference ID"
                value={formData.paymentId}
                onChange={handleChange}
                required
                className="w-full p-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
              />

              {/* AMOUNT */}
              <input
                type="number"
                name="amountPaid"
                placeholder="Amount Paid"
                value={formData.amountPaid}
                onChange={handleChange}
                required
                className="w-full p-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300"
              />

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition disabled:opacity-50"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventRegistrationModal;
