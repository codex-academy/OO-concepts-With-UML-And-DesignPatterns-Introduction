"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Engine_1 = require("./Engine");
var ElectricMotor = /** @class */ (function (_super) {
    __extends(ElectricMotor, _super);
    function ElectricMotor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectricMotor.prototype.pistons = function () {
        return '0 pistons only coils';
    };
    return ElectricMotor;
}(Engine_1.Engine));
exports.ElectricMotor = ElectricMotor;
