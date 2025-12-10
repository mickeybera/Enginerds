import express from "express";
import { createParticipant, getParticipantsByEvent } from "../controllers/participantController.js";

const router = express.Router();

router.post("/register", createParticipant);
router.get("/event/:eventId", getParticipantsByEvent);

export default router;   // ✅ THIS LINE IS IMPORTANT

