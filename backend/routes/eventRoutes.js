import express from "express";
import { 
  createEvent, 
  getEvents,
  getEventById, 
  updateEvent,
  deleteEvent 
} from "../controllers/eventController.js";

import { upload } from "../multer.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// CREATE EVENT
router.post(
  "/create",
  protect,
  upload.fields([
    { name: "eventImage", maxCount: 1 },
    { name: "qrImage", maxCount: 1 },
  ]),
  createEvent
);

// GET ALL EVENTS
router.get("/", getEvents);

// ✅ GET SINGLE EVENT BY ID (REQUIRED FOR EDIT PAGE)
router.get("/:id", getEventById);

// UPDATE EVENT (match frontend)
router.put(
  "/:id",
  protect,
  upload.fields([
    { name: "eventImage", maxCount: 1 },
    { name: "qrImage", maxCount: 1 },
  ]),
  updateEvent
);

// DELETE EVENT (this is fine)
router.delete("/:id", protect, deleteEvent);

export default router;
