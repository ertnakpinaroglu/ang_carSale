const mongoose = require("mongoose");

const mongoDbUrl = "mongodb://ert123:oto_123@ds227168.mlab.com:27168/otomobile_db";


const connectPromise = mongoose.connect(mongoDbUrl, { useNewUrlParser: true });

connectPromise.then(() => {
    console.log("MogoDb Started: " + mongoDbUrl);
});

connectPromise.catch((err) => {
    console.log("MongoDb Failed: " + err);
});


