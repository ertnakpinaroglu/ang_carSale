const carRouter = require("../Routes/Car");

module.exports = (app) => {
    app.use("/", carRouter);
};