const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router();
const { createWorkout, getWorkouts, getOneWorkout, deleteWorkout, updateWorkout} = require('../controllers/workoutController')

router.get('/', getWorkouts)

router.get('/:id', getOneWorkout)

router.post('/', createWorkout);

router.delete('/:id', deleteWorkout)

router.patch('/', updateWorkout)

module.exports = router