// import mongoose from "mongoose";

// const registrationSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
//   paymentScreenshot: String,
//   createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.model("Registration", registrationSchema);



import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
  name: { type: String, required: true },      // added
  email: { type: String, required: true },     // added
  phone: { type: String, required: true },     // added
  paymentScreenshot: { type: String },         // optional
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Registration", registrationSchema);
