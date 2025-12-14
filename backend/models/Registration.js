// import mongoose from "mongoose";

// const registrationSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
//   paymentScreenshot: String,
//   createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.model("Registration", registrationSchema);



// import mongoose from "mongoose";

// const registrationSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
//   name: { type: String, required: true },      // added
//   email: { type: String, required: true },     // added
//   phone: { type: String, required: true },     // added
//   paymentScreenshot: { type: String },         // optional
//   createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.model("Registration", registrationSchema);

//final model
import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },

    // NEW FIELDS
    transactionId: {
      type: String,
      required: true, // make required
      trim: true,
    },

    paymentId: {
      type: String,
      trim: true,
      required:true, // optional
    },

    amountPaid: {
  type: Number,
  required: true,
},

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Registration", registrationSchema);

