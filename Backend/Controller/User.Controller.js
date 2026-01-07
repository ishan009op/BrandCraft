import jwt from "jsonwebtoken";
import User from "../Models/User.model.js";

/**
 * CREATE USER / MESSAGE
 */
export const addMessage = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Name and email are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: `User already exists with email ${email}`,
        user: email,
      });
    }

    const user = await User.create({ name, email });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(201).json({
      message: `User ${email} created successfully`,
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error while creating user",
      error: error.message,
    });
  }
};

/**
 * GET ALL USERS (ADMIN ONLY)
 */
export const getMessage = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      message: `Fetched ${users.length} users`,
      users,
      requestedBy: req.user?.email || "unknown",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};
