import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

//Sign up
export const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Signup failed", error: err.message });
  }
};

//Login
//פונקציה ליצירת טוקן
const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

//פונ התחברות
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    //בדיקה אם המשתמש קייםם
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    //בדיקת סיסמה
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    //יצירת טוקן
    const token = createToken(user._id);
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};
