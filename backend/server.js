const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const { loadPlanetData } = require("./model/planets.model");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", router);

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, async () => {
  await loadPlanetData();
  console.log(`API running on port ${PORT}`);
});
