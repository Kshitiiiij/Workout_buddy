import express from "express";
import {getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout} from '../controller/workoutController.js'

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

export { router as workoutRouter };