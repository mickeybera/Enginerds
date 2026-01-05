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

  // const successSound = new Audio("/success.mp3");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventId: preSelectedEvent || "",
    transactionId: "",
    paymentId: "",
    amountPaid: "",
  });

  /* ---------------- Fetch Events ---------------- */
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

  /* ---------------- Input Handler ---------------- */
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  /* ---------------- Submit ---------------- */
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
      setMessage("❌ Registration failed. Check payment details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            className="relative w-full max-w-4xl bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]
                       border border-cyan-400/20 rounded-3xl shadow-[0_0_50px_rgba(0,255,255,0.25)] p-8"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-5 text-white text-3xl hover:text-red-400 transition"
            >
              ×
            </button>

            {/* SUCCESS */}
            {success ? (
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-64 flex flex-col items-center justify-center text-green-400"
              >
                <div className="text-6xl mb-4">✔</div>
                <h2 className="text-3xl font-bold">
                  Registration Successful
                </h2>
                <p className="text-green-300 mt-2">
                  Welcome to TechFeast 🚀
                </p>
              </motion.div>
            ) : (
              <>
                <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
                  Secure Event Registration
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* LEFT : EVENT + QR */}
                  <div className="space-y-6">
                    {selectedEventImage && (
                      <div className="bg-black/40 rounded-2xl p-4">
                        <img
                          src={`https://enginerds-1gc2.onrender.com/${selectedEventImage}`}
                          className="w-full h-52 object-contain rounded-xl"
                          alt="Event"
                        />
                      </div>
                    )}

                    {selectedQRCode && (
                      <div className="bg-white rounded-2xl p-4 w-fit mx-auto">
                        <img
                          src={`https://enginerds-1gc2.onrender.com/${selectedQRCode}`}
                          className="w-40 h-40 object-contain"
                          alt="QR"
                        />
                        <p className="text-center text-sm mt-2 text-gray-700">
                          Scan & Pay
                        </p>
                      </div>
                    )}
                  </div>

                  {/* RIGHT : FORM */}
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 text-white"
                  >
                    {[
                      ["name", "Full Name"],
                      ["email", "Email"],
                      ["phone", "Phone"],
                      ["transactionId", "Transaction ID"],
                      ["paymentId", "UPI Reference ID"],
                      ["amountPaid", "Amount Paid"],
                    ].map(([name, placeholder]) => (
                      <input
                        key={name}
                        type={name === "amountPaid" ? "number" : "text"}
                        name={name}
                        placeholder={placeholder}
                        required
                        onChange={handleChange}
                        className="w-full p-3 rounded-xl bg-white/10 border border-white/20
                                   focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
                      />
                    ))}

                    <button
                      disabled={loading}
                      className="hover:cursor-pointer rounded-md w-full py-3 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10
                                 text-white font-bold shadow-xl
                                 hover:scale-105 transition"
                    >
                      {loading ? "Processing..." : "Confirm Registration"}
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
