import express from "express";
import { loginUser, signupUser } from '../controller/userController.js'

const router = express.Router()

//Login route
router.post('/login', loginUser)

//Signup route
router.post('/signup', signupUser)


export {router as userRouter}