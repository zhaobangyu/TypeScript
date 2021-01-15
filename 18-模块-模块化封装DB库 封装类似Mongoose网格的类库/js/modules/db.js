"use strict";
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
