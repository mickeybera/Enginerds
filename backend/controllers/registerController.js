import Registration from "../models/Registration.js";
import mongoose from "mongoose";

// -----------------------------
// REGISTER FOR EVENT
// -----------------------------
// export const registerForEvent = async (req, res) => {
//   try {
//     const { eventId, name, email, phone } = req.body;

//     // Validate required fields
//     if (!eventId || !name || !email || !phone) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // Validate eventId
//     if (!mongoose.Types.ObjectId.isValid(eventId)) {
//       return res.status(400).json({ error: "Invalid eventId" });
//     }

//     // Optional payment screenshot
//     const screenshot = req.file ? req.file.path : null;

//     // Temporary userId (until you create real users)
//     const dummyUserId = new mongoose.Types.ObjectId();

//     // Save registration
//     const registration = await Registration.create({
//       userId: dummyUserId,
//       eventId: new mongoose.Types.ObjectId(eventId),
//       name,
//       email,
//       phone,
//       paymentScreenshot: screenshot,
//     });

//     res.status(201).json({ success: true, registration });

//   } catch (err) {
//     console.error("Register Error:", err);
//     res.status(500).json({ error: err.message });
//   }
// };


export const createRegistration = async (req, res) => {
  try {
    const { name, email,eventId, phone,transactionId,paymentId,amountPaid } = req.body;

    if (!name || !email || !phone || !transactionId || !paymentId || !amountPaid) {
      return res.status(400).json({ error: "All required fields must be filled." });
    }

    const newReg = new Registration({
      name,
      email,
      phone,
      eventId,
      transactionId,
      paymentId,
      amountPaid,
    });

    await newReg.save();

    res.json({
      message: "Registration successful!",
      registration: newReg,
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// -----------------------------
// GET PARTICIPANTS BY EVENT ID
// -----------------------------
// export const getParticipants = async (req, res) => {
//   try {
//     const { eventId } = req.params;

//     // Validate event ID
//     if (!mongoose.Types.ObjectId.isValid(eventId)) {
//       return res.status(400).json({ error: "Invalid eventId" });
//     }

//     // Fetch participants
//     const participants = await Registration.find({
//       eventId: new mongoose.Types.ObjectId(eventId),
//     }).select("name email phone paymentScreenshot");

//     res.json({ success: true, participants });

//   } catch (error) {
//     console.error("Get Participants Error:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

//final get participantes
export const getParticipants = async (req, res) => {
  try {
    const { eventId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(eventId)) {
      return res.status(400).json({ error: "Invalid eventId" });
    }

    const participants = await Registration.find({ eventId })
      .select("name email phone paymentScreenshot paymentId transactionId amountPaid");

    res.json({ success: true, participants });
  } catch (error) {
    console.error("Get Participants Error:", error);
    res.status(500).json({ message: error.message });
  }
};




// -----------------------------
// GET PARTICIPANTS BY EVENT ID
// -----------------------------
// export const getParticipants = async (req, res) => {
//   try {
//     const { eventId } = req.params;

//     // Validate eventId format
//     if (!eventId) {
//       return res.status(400).json({ error: "EventId is required" });
//     }

//     // Try to convert to ObjectId if possible
//     let eventIdQuery;
//     if (mongoose.Types.ObjectId.isValid(eventId)) {
//       eventIdQuery = mongoose.Types.ObjectId(eventId);
//     } else {
//       eventIdQuery = eventId; // fallback to string
//     }

//     // Fetch participants
//     const participants = await Registration.find({
//       eventId: eventIdQuery,
//     }).select("name email phone paymentScreenshot");

//     res.json({ success: true, participants });

//   } catch (error) {
//     console.error("Get Participants Error:", error);
//     res.status(500).json({ message: error.message });
//   }
// };




