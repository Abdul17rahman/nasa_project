const { launches, addLaunch } = require("../model/launch.model");

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

module.exports = {
  getHttpLaunches,
  addHttpLaunch,
};
