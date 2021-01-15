"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserClass = void 0;
var mssqsldb_1 = __importDefault(require("../modules/mssqsldb"));
//操作用户表
var UserClass = /** @class */ (function () {
    function UserClass() {
    }
    return UserClass;
}());
exports.UserClass = UserClass;
var u = new UserClass();
u.username = 'admin';
u.password = '123456';
var UserModel = new mssqsldb_1.default();
exports.UserModel = UserModel;
