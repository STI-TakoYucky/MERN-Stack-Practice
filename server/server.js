require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts')

const app = express();

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use('/api/workouts', workoutRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        
        app.listen(process.env.PORT, () => {
            console.log("listening on port", process.env.PORT);
        })
    })
    .catch((err) => {
        console.log(err);
    })
