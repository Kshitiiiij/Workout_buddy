import { User } from "../models/userModel.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from 'validator'

//login
export const loginUser = async (req, res) => {
  res.json({ mssg: "login user" });
};

//signup
export const signupUser = async (req, res) => {
  const { email, password } = req.body;

  //VALIDATION


  try {
    const exists = await User.findOne({ email });
    if (exists) {
      throw Error("Email already in use");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({ email, password: hash });

    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
