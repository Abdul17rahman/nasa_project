const express = require("express");
const { getAllPlanets } = require("../controllers/planets.controller");

const router = express.Router();

router.get("/planets", getAllPlanets);

module.exports = router;
