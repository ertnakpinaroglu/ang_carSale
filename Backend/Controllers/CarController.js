const CarModel = require("../Models/Otomobile");
module.exports.getAllCars = (req, res) => {

    const getAllCarsPromise = CarModel.find({});

    getAllCarsPromise.then((cars) => {
        res.json({ cars })
    });
    getAllCarsPromise.catch((err) => {
        res.json({ status: false, message: "Not found" });
    });
};