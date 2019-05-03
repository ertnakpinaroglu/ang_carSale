const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../App_Server/Server");

chai.use(chaiHttp);

describe('NODEJS OTOMOBILE', () => {
    it("GET ALL CARS", (done) => {
        chai.request(server).get("/").end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});



