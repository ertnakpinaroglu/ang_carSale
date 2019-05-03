const carCtrl = require("../Controllers/CarController");
const router = require("express").Router();

router.get("/", carCtrl.getAllCars);
router.post("/add", carCtrl.postCar);
module.exports = router;

