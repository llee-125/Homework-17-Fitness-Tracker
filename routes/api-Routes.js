const router = require("express").Router();
const {
  getLastWorkout,
  newExercise,
  seeAll,
} = require("../controllers/api-controller");

router.get("/api/workout", getLastWorkout);

router.post("/api/new", newExercise);

router.put("/api/all", seeAll);

module.exports = router;
