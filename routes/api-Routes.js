const router = require("express").Router();
const {
  getWorkout,
  newWorkout,
  addExercise,
} = require("../controllers/api-controller");

router.get("/api/workouts", getWorkout);
router.get("/api/workouts/range", getWorkout);

router.post("/api/workouts", newWorkout);

router.put("/api/workouts/:id", addExercise);

module.exports = router;
