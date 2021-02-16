const express = require("express");
const router = express.Router();

const Car = require("./cars-model");

router.get("/", async (req, res, next) => {
  try {
    const data = await Car.getAll();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.use((error, req, res, next) => {
  res.status(500).json({
    info: "Error occurred inside accountsRouter",
    message: error.message,
    stack: error.stack,
  });
});

module.exports = router;
