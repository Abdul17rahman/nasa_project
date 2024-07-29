const express = require("express");
const cors = require("cors");
const router = require("./routes/index");

const app = express();
const path = require("path");

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

module.exports = app;
