const express = require("express");
const router = express.Router();

const Car = require("./cars-model");

router.get("/", (req, res, next) => {
  try {
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
module.exports = router;
