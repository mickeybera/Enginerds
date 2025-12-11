import React, { useState } from "react";
import axios from "axios";
import { FiImage, FiUploadCloud, FiCreditCard } from "react-icons/fi";

const AddEvent = () => {
  const [form, setForm] = useState({
    name: "",
    date: "",
    description: "",
  });

  const [image, setImage] = useState(null);
  const [qr, setQr] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImage = (e) => setImage(e.target.files[0]);
  const handleQr = (e) => setQr(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("adminToken");
    if (!token) {
      alert("Admin not logged in!");
      return;
    }

    const data = new FormData();
    data.append("name", form.name);
    data.append("date", form.date);
    data.append("description", form.description);
    if (image) data.append("eventImage", image);
    if (qr) data.append("qrImage", qr);

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/events/create", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Event Added Successfully!");

      setForm({ name: "", date: "", description: "" });
      setImage(null);
      setQr(null);
    } catch (err) {
      console.error("Error adding event:", err);
      alert(err.response?.data?.error || "Error adding event");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen text-white animate-fadeIn">
      <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-lg">
        Add New Event
      </h2>

      <form
        className="max-w-3xl mx-auto p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl space-y-6"
        onSubmit={handleSubmit}
      >
        {/* EVENT NAME */}
        <div>
          <label className="text-sm text-gray-300">Event Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter event name"
            value={form.name}
            onChange={handleChange}
            className="mt-2 p-3 w-full text-white bg-black/30 border border-white/20 rounded-xl focus:outline-none focus:border-purple-400"
            required
          />
        </div>

        {/* EVENT DATE */}
        <div>
          <label className="text-sm text-gray-300">Event Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="mt-2 p-3 w-full text-white bg-black/30 border border-white/20 rounded-xl focus:outline-none focus:border-blue-400"
            required
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="text-sm text-gray-300">Description</label>
          <textarea
            name="description"
            placeholder="Event description..."
            value={form.description}
            onChange={handleChange}
            className="mt-2 p-3 w-full text-white bg-black/30 border border-white/20 rounded-xl focus:outline-none focus:border-green-400"
            rows={4}
            required
          />
        </div>

        {/* EVENT IMAGE UPLOAD */}
        <div>
          <label className="flex items-center gap-2 text-sm text-gray-300">
            <FiImage className="text-lg text-purple-300" /> Event Image
          </label>
          <input
            type="file"
            onChange={handleImage}
            className="mt-2 w-full cursor-pointer"
          />

          {image && (
            <p className="text-green-400 text-sm mt-1">
              Selected: {image.name}
            </p>
          )}
        </div>

        {/* QR IMAGE UPLOAD */}
        <div>
          <label className="flex items-center gap-2 text-sm text-gray-300">
            <FiCreditCard className="text-lg text-blue-300" /> Payment QR
          </label>
          <input
            type="file"
            onChange={handleQr}
            className="mt-2 w-full cursor-pointer"
          />

          {qr && (
            <p className="text-green-400 text-sm mt-1">
              Selected: {qr.name}
            </p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-all disabled:opacity-50"
        >
          {loading ? "Adding Event..." : "Add Event"}
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
