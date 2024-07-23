const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const { loadPlanetData } = require("./model/planets.model");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api", router);

app.listen(PORT, async () => {
  await loadPlanetData();
  console.log(`API running on port ${PORT}`);
});
