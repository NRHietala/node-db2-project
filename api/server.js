const express = require("express");
const server = express();
server.use(express.json());

const carRouter = require("../api/cars/cars-router");

server.use("/api/cars", carRouter);

server.get("/", (_, res) => {
  res.send("👺👺👺 It's Alive 👺👺👺");
});

server.use("*", (_, res) => {
  res.status(404).json({ message: "404 Resource not found" });
});

module.exports = server;
