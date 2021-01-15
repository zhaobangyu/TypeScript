"use strict";
var MsSqlDb = /** @class */ (function () {
    function MsSqlDb() {
        console.log("初始化 MsSqlDb 信息");
    }
    //添加操作
    MsSqlDb.prototype.add = function (data) {
        console.log('MsSqlDb add');
        console.log(data);
        return true;
    };
    //更新操作
    MsSqlDb.prototype.update = function (data, id) {
        return true;
    };
    //删除操作
    MsSqlDb.prototype.delte = function (id) {
        return true;
    };
    //获取操作
    MsSqlDb.prototype.get = function (id) {
        return [];
    };
    return MsSqlDb;
}());
