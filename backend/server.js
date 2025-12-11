import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { MONGO_URL, PORT } from "./config.js";
import adminRoutes from "./routes/adminRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import registerRoutes from "./routes/registerRoutes.js";
import participantsRoutes from "./routes/participantRoutes.js"

const app = express();
app.use(cors());
app.use(express.json());
// app.use("/uploads", express.static("uploads"));
app.use("/uploads", express.static("uploads"));


app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/register", registerRoutes);
app.use("/api/participants", participantsRoutes);
// app.use("/api/participants", participantsRoutes);


mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch((err) => console.log(err));
