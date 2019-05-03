const CarModel = require("../Models/Otomobile");
module.exports.getAllCars = (req, res) => {

    const getAllCarsPromise = CarModel.find({});

    getAllCarsPromise.then((cars) => {
        res.json(cars);
    });
    getAllCarsPromise.catch((err) => {
        res.json({ status: false, message: "Not found" });
    });
};

module.exports.postCar = (req, res) => {
    const newCarModel = new CarModel({
        announcementDate: Date.now,
        mark: "Mercedes-Ben",
        series: "C",
        model: "C 200 d Blue TEC AMG",
        year: 2016,
        fuel: "Dizel",
        gear: "Yarı otomatik",
        km: 41000,
        chassisType: "Sedan",
        enginePower: "126-150 Hp",
        engineDisplacement: "1300-1600 cm^3",
        pull: "Arkadan İtiş",
        color: "Beyaz",
        guarantee: "Hayır",
        plaque: "Türkiye(TR) plakalı ",
        who: "Sahibinden",
        swap: "Evet",
        state: "Kinci El ",
        images: "Resimler eklenecek!"
    });

    const newCarModelPromise = newCarModel.save();

    newCarModelPromise.then((car) => {
        res.json(car);
        console.log("Data Eklendi");
    });
    newCarModelPromise.catch((err) => {
        res.json({ message: "Add operation does not applied.", status: false });
        console.log("Ekleme işlemi yapılırken hata oluştu.");
    });

};