const launches = new Map();

let latestFlight = 100;

const launch = {
  flightNumber: 100,
  mission: "Testing Speed",
  rocket: "Explorer ISI",
  launchDate: new Date("January 1, 2023"),
  target: "Kepler-442 b",
  customers: ["NASA", "AR TECH"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function lauchExists(id) {
  if (launches.get(id)) {
    return launches.get(id);
  }
  return false;
}

function addLaunch(newlaunch) {
  latestFlight++;
  launches.set(
    latestFlight,
    Object.assign(newlaunch, {
      flightNumber: latestFlight,
      customers: ["EJM", "NASA"],
      upcoming: true,
      success: true,
    })
  );
}

function abortLaunch(id) {
  const abortedLanch = lauchExists(id);
  if (abortedLanch) {
    abortedLanch.upcoming = false;
    abortedLanch.success = false;
    return abortedLanch;
  }
}

module.exports = {
  lauchExists,
  launches,
  addLaunch,
  abortLaunch,
};
