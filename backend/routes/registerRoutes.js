import express from "express";
import multer from "multer";
import { protect } from "../middleware/authMiddleware.js";
import { registerForEvent, getParticipants } from "../controllers/registerController.js";

const upload = multer({ dest: "uploads/paymentScreenshots/" });

const router = express.Router();

router.post("/create",  upload.single("paymentScreenshot"), registerForEvent);

router.get("/participants/:eventId", protect, getParticipants);

export default router;
