"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.D = exports.C = void 0;
var C;
(function (C) {
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.get = function () {
            console.log('this is C Person get');
        };
        return Person;
    }());
    C.Person = Person;
})(C = exports.C || (exports.C = {}));
var D;
(function (D) {
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.get = function () {
            console.log('this is D Person get');
        };
        return Person;
    }());
    D.Person = Person;
})(D = exports.D || (exports.D = {}));
