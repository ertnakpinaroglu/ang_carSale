const express = require("express");
const app = express();


const port = process.env.POST || 8000;
// Enable CORS 
const cors = require("cors");
app.use(cors());
// Connect To DB 
const dbServer = require("../Database/DbServer");


app.listen(port, () => {
    console.log("Server is listening...");
});