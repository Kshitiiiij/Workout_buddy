import express from "express";
import { workoutRouter } from "./routes/workoutRoute.js";
import {userRouter} from './routes/userRouter.js'
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from 'cors';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRouter);
app.use('/api/user', userRouter)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(3000, () => {
      console.log("connected to db & listening on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
