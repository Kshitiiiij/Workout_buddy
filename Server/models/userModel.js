import mongoose from "mongoose";
// import bcrypt from "bcrypt";
const {Schema} = mongoose

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// // Static sign up method
// userSchema.statics.signup = async (email, password) => {
//   const exists = await this.findOne({ email });
//   if (exists) {
//     throw Error("Email already in use");
//   }
//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash(password, salt);

//   const user = await this.create({email, password: hash})

//   return user
// };
export const User = mongoose.model("User", userSchema);
