import mongoose from "mongoose";

// const eventSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   price: Number,
//   date: String,
//   eventImage: String, // store URL
//   qrImage: String,    // store URL
// });

// export default mongoose.model("Event", eventSchema);





// import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  date: String,
  eventImage: String,
  qrImage: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Event", eventSchema);
