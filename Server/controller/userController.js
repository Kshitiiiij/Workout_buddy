import { User } from "../models/userModel.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Please fill all field" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw Error("Invalid login credentials");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw Error("Invalid login credentials");
    }

    const token = createToken(user._id);
    res.status(200).json({email, token, message: "logged in sucessfully"});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup
export const signupUser = async (req, res) => {
  const { email, password } = req.body;

  //VALIDATION
  if (!email || !password) {
    return res.status(400).json({ error: "Please fill all field" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Not an valid email" });
  }
  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({ error: "Password not strong enough" });
  }

  try {
    const exists = await User.findOne({ email });
    if (exists) {
      throw Error("Email already in use");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({ email, password: hash });

    //create a jwt token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
