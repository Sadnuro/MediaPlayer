"use strict";
exports.__esModule = true;
var Singleton_1 = require("./Singleton");
var a = Singleton_1["default"].getInstance();
var b = Singleton_1["default"].getInstance();
console.log(a === b);
