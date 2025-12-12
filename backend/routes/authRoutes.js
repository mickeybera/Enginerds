import express from "express";
import { signup, login, logout } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// USER SIGNUP
router.post("/signup", signup);

// USER LOGIN
router.post("/login", login);

// PROTECTED LOGOUT
router.post("/logout", protect, logout);



export default router;

