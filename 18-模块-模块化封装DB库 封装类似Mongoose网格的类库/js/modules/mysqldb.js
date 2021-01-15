"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
        console.log("初始化 MysqlDb 信息");
    }
    //添加操作
    MysqlDb.prototype.add = function (data) {
        console.log('MysqlDb add');
        console.log(data);
        return true;
    };
    //更新操作
    MysqlDb.prototype.update = function (data, id) {
        return true;
    };
    //删除操作
    MysqlDb.prototype.delte = function (id) {
        return true;
    };
    //获取操作
    MysqlDb.prototype.get = function (id) {
        return [];
    };
    return MysqlDb;
}());
exports.default = MysqlDb;
