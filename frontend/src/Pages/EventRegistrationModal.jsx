import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const EventRegistrationModal = ({ isOpen, onClose, preSelectedEvent }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const [selectedEventImage, setSelectedEventImage] = useState(null);
  const [selectedQRCode, setSelectedQRCode] = useState(null);

  const successSound = new Audio("/success.mp3");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventId: preSelectedEvent || "",
    transactionId: "",
    paymentId: "",
    amountPaid: "",
  });

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(
          "https://enginerds-1gc2.onrender.com/api/events"
        );
        setEvents(res.data);

        if (preSelectedEvent) {
          const evt = res.data.find(e => e._id === preSelectedEvent);
          if (evt) {
            setSelectedEventImage(evt.eventImage);
            setSelectedQRCode(evt.qrImage);
          }
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchEvents();
  }, [preSelectedEvent]);

  // Handle input
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Submit
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await axios.post(
        "https://enginerds-1gc2.onrender.com/api/register/create",
        formData
      );

      successSound.play();
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2500);
    } catch (err) {
      setMessage("Registration failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            className="relative w-full max-w-3xl bg-black/80 border border-purple-500/30 rounded-2xl shadow-[0_0_40px_rgba(138,43,226,0.5)] p-6"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-white text-2xl"
            >
              ×
            </button>

            {/* SUCCESS SCREEN */}
            {success ? (
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-64 flex flex-col items-center justify-center text-green-400"
              >
                <div className="text-6xl mb-3">✔</div>
                <h2 className="text-2xl font-bold">
                  Registration Successful
                </h2>
                <p className="text-green-300 mt-2">
                  See you at TechFeast 🚀
                </p>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-white mb-5 text-center">
                  Event Registration
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* LEFT : Images */}
                  <div className="space-y-4">
                    {selectedEventImage && (
                      <img
                        src={`https://enginerds-1gc2.onrender.com/${selectedEventImage}`}
                        className="w-full h-40 object-cover rounded-xl"
                        alt="Event"
                      />
                    )}

                    {selectedQRCode && (
                      <img
                        src={`https://enginerds-1gc2.onrender.com/${selectedQRCode}`}
                        className="w-40 mx-auto bg-white p-2 rounded-xl"
                        alt="QR"
                      />
                    )}
                  </div>

                  {/* RIGHT : FORM */}
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-3 text-white"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl bg-white/10 border border-white/20"
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl bg-white/10 border border-white/20"
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      required
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl bg-white/10 border border-white/20"
                    />

                    <input
                      type="text"
                      name="transactionId"
                      placeholder="Transaction ID"
                      required
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl bg-white/10 border border-white/20"
                    />

                    <input
                      type="text"
                      name="paymentId"
                      placeholder="UPI Reference ID"
                      required
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl bg-white/10 border border-white/20"
                    />

                    <input
                      type="number"
                      name="amountPaid"
                      placeholder="Amount Paid"
                      required
                      onChange={handleChange}
                      className="w-full p-2.5 rounded-xl bg-white/10 border border-white/20"
                    />

                    <button
                      disabled={loading}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition font-semibold"
                    >
                      {loading ? "Registering..." : "Register"}
                    </button>

                    {message && (
                      <p className="text-red-400 text-sm text-center">
                        {message}
                      </p>
                    )}
                  </form>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventRegistrationModal;
