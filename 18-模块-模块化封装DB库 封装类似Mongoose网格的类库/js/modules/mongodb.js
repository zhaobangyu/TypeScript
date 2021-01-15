"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MongoDb = /** @class */ (function () {
    function MongoDb() {
        console.log("初始化 MongoDb 信息");
    }
    //添加操作
    MongoDb.prototype.add = function (data) {
        return true;
    };
    //更新操作
    MongoDb.prototype.update = function (data, id) {
        return true;
    };
    //删除操作
    MongoDb.prototype.delte = function (id) {
        return true;
    };
    //获取操作
    MongoDb.prototype.get = function (id) {
        return [];
    };
    return MongoDb;
}());
exports.default = MongoDb;
