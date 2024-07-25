const express = require("express");
const { getAllPlanets } = require("../controllers/planets.controller");
const {
  getHttpLaunches,
  addHttpLaunch,
} = require("../controllers/launch.controller");

const router = express.Router();

router.get("/planets", getAllPlanets);
router.get("/launches", getHttpLaunches);
router.post("/launches", addHttpLaunch);

module.exports = router;
