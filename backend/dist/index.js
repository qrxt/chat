import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
var app = express();
app.use(express.json());
app.use(cors());
var port = process.env.port || 5000;
app.get("/", function (request, response) {
    response.send("Hello world!");
});
mongoose
    .connect(process.env.MONGODB_URI)
    .then(function (connection) {
    console.log("Successfully connected to database");
    return connection;
})
    .then(function () {
    app.listen(port, function () { return console.log("Running on port ".concat(port)); });
})
    .catch(function (e) { return console.error("Failed to connect to database: ".concat(e)); });
