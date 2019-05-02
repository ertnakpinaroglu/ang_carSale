const carCtrl = require("../Controllers/CarController");
const router = require("express").Router();

router.get("/", carCtrl.getAllCars);
module.exports = router;

