require("dotenv").config();
const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  getReserves,
  deleteReserve,
  createReserve,
} = require("../controllers/reserverControllers/reservesControllers");
const firerbaseImages = require("../middlewares/firerbaseImages/firerbaseImages");

const upload = multer({
  dest: path.join("uploads", "images"),
  limits: {
    fieldSize: 8000000,
  },
});

const reservesRouter = express.Router();

reservesRouter.get("/", getReserves);
reservesRouter.delete("/:idReserve", deleteReserve);
reservesRouter.post(
  "/create",
  upload.single("image"),
  firerbaseImages,
  createReserve
);

module.exports = reservesRouter;
