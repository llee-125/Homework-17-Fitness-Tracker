const workout = require("../models/workout");

module.exports = {
  getLastWorkout: async (req, res) => {
    workout
      .create(req.body)
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  },
};

module.exports = {
  newExercise: async (req, res) => {
    workout
      .create(req.body)
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  },
};

module.exports = {
  seeAll: async (req, res) => {
    workout
      .create(req.body)
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  },
};
