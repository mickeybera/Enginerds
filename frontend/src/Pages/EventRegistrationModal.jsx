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
    paymentScreenshot: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedEventImage, setSelectedEventImage] = useState(null);
  const [selectedQRCode, setSelectedQRCode] = useState(null);

  // Fetch Events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/events");
        setEvents(res.data);

        if (preSelectedEvent) {
          const evt = res.data.find((e) => e._id === preSelectedEvent);
          if (evt) {
            setSelectedEventImage(evt.eventImage);
            setSelectedQRCode(evt.qrImage); // FIXED
          }
        }
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };
    fetchEvents();
  }, [preSelectedEvent]);

  // Update event image + QR on select
  useEffect(() => {
    if (formData.eventId) {
      const evt = events.find((e) => e._id === formData.eventId);
      if (evt) {
        setSelectedEventImage(evt.eventImage);
        setSelectedQRCode(evt.qrImage); // FIXED
      } else {
        setSelectedEventImage(null);
        setSelectedQRCode(null);
      }
    }
  }, [formData.eventId, events]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "paymentScreenshot") {
      setFormData((prev) => ({ ...prev, paymentScreenshot: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

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
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("eventId", formData.eventId);

      if (formData.paymentScreenshot) {
        data.append("paymentScreenshot", formData.paymentScreenshot);
      }

      await axios.post("http://localhost:5000/api/register/create", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Registration Successful!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        eventId: preSelectedEvent || "",
        paymentScreenshot: null,
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
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white/10 w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl glass-card relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-white text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Event Registration
            </h2>

            {message && (
              <p
                className={`text-center mb-4 ${
                  message.includes("Successful") ? "text-green-400" : "text-red-400"
                }`}
              >
                {message}
              </p>
            )}

            {selectedEventImage && (
              <img
                src={`http://localhost:5000/${selectedEventImage}`}
                alt="Event"
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
            )}

            {selectedQRCode && (
              <div className="flex justify-center mb-4">
                <img
                  src={`http://localhost:5000/${selectedQRCode}`}
                  alt="Payment QR"
                  className="w-32 h-32 object-contain rounded-xl shadow-lg"
                />
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none"
                required
              />

              <select
                name="eventId"
                value={formData.eventId}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-black focus:outline-none"
                required
              >
                <option value="" disabled>
                  Select Event
                </option>

                {events.map((event) => (
                  <option key={event._id} value={event._id}>
                    {event.title} {/* FIXED */}
                  </option>
                ))}
              </select>

              <input
                type="file"
                name="paymentScreenshot"
                onChange={handleChange}
                className="w-full text-white"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition disabled:opacity-50"
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
