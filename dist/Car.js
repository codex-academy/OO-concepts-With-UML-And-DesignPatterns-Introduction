"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
        engine.start();
    }
    // abstract type() : String;
    Car.prototype.drive = function () {
    };
    return Car;
}());
exports.Car = Car;
