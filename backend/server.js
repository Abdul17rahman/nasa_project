const http = require("http");

const app = require("./app");
const { loadPlanetData } = require("./model/planets.model");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

async function startServer() {
  await loadPlanetData();
  server.listen(PORT, () => {
    console.log("Server started.....");
  });
}

startServer();
