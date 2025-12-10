import mongoose from "mongoose";

const participantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
  createdAt: { type: Date, default: Date.now },
});

const Participant = mongoose.model("Participant", participantSchema);
export default Participant;
