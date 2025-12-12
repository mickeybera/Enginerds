import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://enginerds-1gc2.onrender.com/api/events";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    price: "",
    eventImage: "", // updated to match backend
    qrImage: "", // optional
  });

  const [imageFile, setImageFile] = useState(null);

  // GET EVENT BY ID
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`${API_URL}/${id}`);
        setEventData(res.data);
      } catch (err) {
        alert("Error loading event");
        console.log(err);
      }
    };
    fetchEvent();
  }, [id]);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  // UPDATE EVENT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", eventData.title);
      formData.append("description", eventData.description);
      formData.append("price", eventData.price);

      if (imageFile) {
        formData.append("eventImage", imageFile); // match backend field
      }

//      await axios.put(`${API_URL}/update/${id}`, formData, {
//   headers: {
//     "Content-Type": "multipart/form-data",
//     Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
//   },
// });
await axios.put(`${API_URL}/${id}`, formData, {
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
  },
});

      alert("Event updated successfully!");
      navigate("/admin/events");
    } catch (error) {
      alert("Failed to update event");
      console.log(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Event</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-semibold">Event Title</label>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold">Description</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            rows="4"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={eventData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* Current Image */}
        {eventData.eventImage && (
          <div>
            <label className="block font-semibold mb-2">Current Image</label>
            <img
              src={`https://enginerds-1gc2.onrender.com/${eventData.eventImage}`}
              alt="event"
              className="w-32 h-32 rounded-lg object-cover border"
            />
          </div>
        )}

        {/* New Image */}
        <div>
          <label className="block font-semibold">Upload New Image (Optional)</label>
          <input
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
        >
          Update Event
        </button>
      </form>
    </div>
  );
};

export default EditEvent;
