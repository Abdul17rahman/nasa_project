const express = require("express");
const { getAllPlanets } = require("../controllers/planets.controller");
const {
  getHttpLaunches,
  addHttpLaunch,
  httpAbortLaunch,
} = require("../controllers/launch.controller");

const router = express.Router();

router.get("/planets", getAllPlanets);
router.get("/launches", getHttpLaunches);
router.post("/launches", addHttpLaunch);
router.delete("/launches/:id", httpAbortLaunch);

module.exports = router;
