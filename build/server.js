"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
require("reflect-metadata");
const baseRoute_1 = require("./routes/baseRoute");
class App {
    constructor() {
        this.routeBase = new baseRoute_1.Routes();
        this.app = express();
        this.config();
        this.routeBase.routes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
