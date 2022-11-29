"use strict";
exports.__esModule = true;
var Singleton = /** @class */ (function () {
    function Singleton() {
        // Initialization code here...
    }
    Singleton.getInstance = function () {
        !Singleton.instance ? Singleton.instance = new Singleton() : undefined;
        return Singleton.instance;
    };
    return Singleton;
}());
exports["default"] = Singleton;
