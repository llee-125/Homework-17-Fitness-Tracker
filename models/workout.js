const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subSchema = new Schema({
  type: String,
  name: String,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number,
  distance: Number,
});

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  totalDuration: {
    type: Number,
    default: 0,
  },
  exercises: [subSchema],
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = { workout };
