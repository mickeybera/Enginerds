import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ADMIN_EMAIL, ADMIN_PASSWORD, JWT_SECRET } from "../config.js";

// Only create admin manually using DB
// export const adminLogin = async (req, res) => {
//   const { email, password } = req.body;

//   const admin = await Admin.findOne({ email });
//   if (!admin) return res.status(401).json({ message: "Invalid admin" });

//   const match = await bcrypt.compare(password, admin.password);
//   if (!match) return res.status(401).json({ message: "Wrong password" });

//   const token = jwt.sign({ id: admin._id, role: "admin" }, JWT_SECRET);
//   res.json({ token });
// };

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  // Compare with .env values
  if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ success: false, message: "Invalid Admin" });
  }

  // Generate token
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "7d" });

  res.status(200).json({ success: true, token });
};
