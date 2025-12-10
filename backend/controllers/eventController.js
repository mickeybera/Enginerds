import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  try {
    const { title, description, price, date } = req.body;

    const eventImage = req.files["eventImage"][0].path;
    const qrImage = req.files["qrImage"][0].path;

    const event = await Event.create({
      title,
      description,
      price,
      date,
      eventImage,
      qrImage,
    });

    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

// ==========================
//        UPDATE EVENT
// ==========================
export const updateEvent = async (req, res) => {
  try {
    const { title, description, price, date } = req.body;

    const updateData = {
      title,
      description,
      price,
      date,
    };

    if (req.files?.eventImage) {
      updateData.eventImage = req.files["eventImage"][0].path;
    }

    if (req.files?.qrImage) {
      updateData.qrImage = req.files["qrImage"][0].path;
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(updatedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


//get event by id
// GET single event by id
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    console.error("Error fetching event:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// ==========================
//        DELETE EVENT
// ==========================
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    await Event.findByIdAndDelete(req.params.id);

    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    console.error("Delete Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
