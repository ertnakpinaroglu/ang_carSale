const mongoose = require("mongoose");

const otomobileScheme = mongoose.Schema({
    announcementDate: { type: Date, default: Date.now },
    mark: { type: String },
    series: { type: String },
    model: { type: String },
    year: { type: Number },
    fuel: { type: String },
    gear: { type: String },
    km: { type: Number },
    chassisType: { type: String },
    enginePower: { type: String },
    engineDisplacement: { type: String },
    pull: { type: String },
    color: { type: String },
    guarantee: { type: String },
    plaque: { type: String },
    who: { type: String },
    swap: { type: String },
    state: { type: String },
    images: { type: String }
});

module.exports = mongoose.model("otomobile", otomobileScheme);




