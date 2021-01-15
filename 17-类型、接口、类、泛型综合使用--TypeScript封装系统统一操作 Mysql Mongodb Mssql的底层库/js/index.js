"use strict";
/*
 功能：定义一个操作数据库的库 支持Mysql Mssql MongoDb

 要求：Mysql MsSql MongoDb功能一样 都有add update delete get 方法

 注意：约束统一的规范，以及代码重用

 解决方案：需要约束规范所以要定义接口，需要代码重用所以用到泛型

 1、接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范

 2、泛型：通俗理解：泛型就是解决类、接口、方法的复用性
 */
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
//操作用户表
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = 'admin';
u.password = '123456';
//类作为参数来约束数据传入的类型
var mysql = new MysqlDb();
mysql.add(u);
//类作为参数来约束数据传入的类型
var mssql = new MsSqlDb();
mssql.add(u);
