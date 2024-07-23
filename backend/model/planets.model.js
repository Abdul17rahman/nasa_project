const path = require("path");
const { parse } = require("csv-parse");
const fs = require("fs");

// Initiate an array to store the data
const dataset = [];

// Read data using the file system module
function loadPlanetData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, "..", "data", "kepler_data.csv"))
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        dataset.push(data);
      })
      .on("error", (err) => {
        console.log("Coudn't fetch data", err);
        reject(err);
      })
      .on("end", () => {
        console.log("Finished succesfully");
        resolve();
      });
  });
}

module.exports = {
  loadPlanetData,
  planets: dataset,
};
