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

function addLaunch(newlaunch) {
  Object.assign(newlaunch, {
    flightNumber: latestFlight++,
    customers: ["EJM", "NASA"],
    upcoming: true,
    success: true,
  });

  launches.set(newlaunch.flightNumber, newlaunch);
}

module.exports = {
  launches,
  addLaunch,
};
