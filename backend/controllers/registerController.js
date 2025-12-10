import Registration from "../models/Registration.js";
import mongoose from "mongoose";
// export const registerForEvent = async (req, res) => {
//   try {
//     const { eventId } = req.body;

//     if (!eventId) return res.status(400).json({ error: "EventId is required" });

//     const screenshot = req.file ? req.file.path : null;

//     const registration = await Registration.create({
//       userId: "dummyUser123", // temporary for testing
//       eventId,
//       paymentScreenshot: screenshot,
//     });

//     res.json({ success: true, registration });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// };
export const registerForEvent = async (req, res) => {
  try {
    const { eventId, name, email, phone } = req.body;

    // Validate required fields
    if (!eventId || !name || !email || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if eventId is valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(eventId)) {
      return res.status(400).json({ error: "Invalid eventId" });
    }

    // Optional payment screenshot
    const screenshot = req.file ? req.file.path : null;

    // Use a dummy userId for testing
    const dummyUserId = new mongoose.Types.ObjectId();

    // Create registration
    const registration = await Registration.create({
      userId: dummyUserId,
      eventId: new mongoose.Types.ObjectId(eventId), // ✅ fixed
      name,
      email,
      phone,
      paymentScreenshot: screenshot,
    });

    res.status(201).json({ success: true, registration });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ error: err.message });
  }
};

export const getParticipants = async (req, res) => {
  const { eventId } = req.params;

  const list = await Registration.find({ eventId }).populate("userId", "name email");
  res.json(list);
};


// ✅ GET PARTICIPANTS BY EVENT ID
// export const getParticipants = async (req, res) => {
//   try {
//     const { eventId } = req.params;

//     const participants = await Registration.find({ eventId });

//     res.json({ participants });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

