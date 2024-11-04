const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router();

router.get('/', (req, res) => {
    res.json({mssg: "GET ALL WORKOUTS"})
})

router.get('/:id', (req, res) => {
    res.json({mssg: "Get a single workout"})
})

router.post('/', async (req, res) => { 

    const { title, load, reps } = req.body

    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message })
    }
    res.json({mssg: "post a new WORKOUT"})
})

router.delete('/:id', (req, res) => {
    res.json({mssg: "delete a WORKOUT"})
})

router.patch('/', (req, res) => {
    res.json({mssg: "update a workout"})
})

module.exports = router