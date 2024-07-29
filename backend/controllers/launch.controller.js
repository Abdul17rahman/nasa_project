const {
  launches,
  addLaunch,
  lauchExists,
  abortLaunch,
} = require("../model/launch.model");

function getHttpLaunches(req, res) {
  return res.status(200).json(Array.from(launches.values()));
}

function addHttpLaunch(req, res) {
  const launch = req.body;

  if (!launch.mission || !launch.rocket || !launch.target) {
    return res.status(400).json({
      error: "Missing required information",
    });
  }

  launch.launchDate = new Date(launch.launchDate);

  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid launch date",
    });
  }

  addLaunch(launch);
  return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
  const id = Number(req.params.id);

  if (!lauchExists(id)) {
    return res.status(400).json({
      error: "Launch doesnt exist.",
    });
  }

  return res.status(200).json(abortLaunch(id));
}

module.exports = {
  getHttpLaunches,
  addHttpLaunch,
  httpAbortLaunch,
};
