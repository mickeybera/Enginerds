import React, { useState } from "react";
import axios from "axios";

const AddEvent = () => {
  const [form, setForm] = useState({
    name: "",
    date: "",
    description: "",
  });

  const [image, setImage] = useState(null);
  const [qr, setQr] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
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
    if (qr) data.append("qrImage", qr); // Important: backend expects 'qrImage'

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/events/create", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Event Added Successfully!");

      // Reset form
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
    <div className="p-10 bg-gray-900 min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-6">Add Event</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 w-full text-black rounded"
          required
        />

        <input
          type="date"
          name="date"
          placeholder="Event Date"
          value={form.date}
          onChange={handleChange}
          className="p-3 w-full text-black rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="p-3 w-full text-black rounded"
          required
        />

        <label className="block">Event Image</label>
        <input type="file" onChange={handleImage} className="text-white" />

        <label className="block">Payment QR</label>
        <input type="file" onChange={handleQr} className="text-white" />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 px-6 py-3 rounded mt-4 hover:scale-105 transition disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Event"}
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
