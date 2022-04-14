const express = require("express");
const app = express();
const PORT = 3001;
const fs = require("fs");
const path = require("path");
const cors = require("cors");

// var corsOption = {
//   origin: "http://localhost:3000",
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOption));

const pathToFile = path.resolve("./data.json");

const getResorces = () => JSON.parse(fs.readFileSync(pathToFile));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/resources", (req, res) => {
  const resources = getResorces();
  res.send(resources);
});

app.listen(PORT, () => {
  console.log("Server is on port: " + PORT);
});
