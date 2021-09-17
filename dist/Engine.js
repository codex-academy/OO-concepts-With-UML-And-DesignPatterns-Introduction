"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.start = function () {
        console.log('starting engine...');
    };
    Engine.prototype.type = function () {
        return 'Standard Engine';
    };
    Engine.prototype.pistons = function () {
        return '4 pistons';
    };
    return Engine;
}());
exports.Engine = Engine;
