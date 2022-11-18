"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
app.use();
var port = process.env.port || 5000;
app.get("/", function (request, response) {
    response.send("Hello world!");
});
app.listen(port, function () { return console.log("Running on port ".concat(port)); });
