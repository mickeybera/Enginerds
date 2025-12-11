import express from "express";
import multer from "multer";
import { protect } from "../middleware/authMiddleware.js";
import { createRegistration, getParticipants } from "../controllers/registerController.js";

// Initialize router
const router = express.Router();

// Multer storage for payment screenshots
const upload = multer({ dest: "uploads/paymentScreenshots/" });

// -----------------------------
// Routes
// -----------------------------

// Register for an event
router.post("/create", upload.single("paymentScreenshot"), createRegistration);

// Get participants for a specific event (protected)
router.get("/participants/:eventId", protect, getParticipants);

export default router;


///new
// import express from "express";
// import { registerForEvent, getParticipants } from "../controllers/registerController.js";
// import multer from "multer";

// const router = express.Router();

// // Configure multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   }
// });

// const upload = multer({ storage });

// // REGISTER with screenshot
// router.post("/event", upload.single("paymentScreenshot"), registerForEvent);

// // GET participants list
// router.get("/participants/:eventId", getParticipants);

// export default router;


