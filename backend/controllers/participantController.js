import Participant from "../models/Participant.js";

// CREATE participant
export const createParticipant = async (req, res) => {
  try {
    const participant = new Participant(req.body);
    await participant.save();

    res.status(201).json({
      success: true,
      message: "Participant registered successfully",
      participant,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET participants by eventId
export const getParticipantsByEvent = async (req, res) => {
  try {
    const { eventId } = req.params;

    const participants = await Participant.find({ eventId });

    res.status(200).json({
      success: true,
      participants,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
