const db = require("../models/workout");

module.exports = {
  getWorkout: (req, res) => {
    !req.query.id;
    db.workout
      .find({})
      .then((allWorkouts) => res.send(allWorkouts))
      .catch((err) => res.send(err));
  },

  addExercise: async (req, res) => {
    try {
      const workout = await db.workout.findById(req.params.id);

      workout.exercises.push(req.body);

      let totalDuration = 0;
      await workout.exercises.forEach((exercise) => {
        totalDuration += exercise.duration;
      });

      workout.totalDuration = totalDuration;

      await workout.save();

      res.send(workout);
    } catch (error) {
      res.send(error);
    }
  },

  newWorkout: (req, res) => {
    db.workout
      .create(req.body)
      .then((workout) => {
        res.send(workout);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
