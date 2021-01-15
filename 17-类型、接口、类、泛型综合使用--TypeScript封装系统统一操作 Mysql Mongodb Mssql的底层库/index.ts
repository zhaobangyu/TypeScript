/*
 功能：定义一个操作数据库的库 支持Mysql Mssql MongoDb

 要求：Mysql MsSql MongoDb功能一样 都有add update delete get 方法

 注意：约束统一的规范，以及代码重用

 解决方案：需要约束规范所以要定义接口，需要代码重用所以用到泛型

 1、接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范

 2、泛型：通俗理解：泛型就是解决类、接口、方法的复用性
 */

interface DBI<T> {
    //添加操作
    add(data: T): boolean;
    //更新操作
    update(data: T, id: number): boolean;
    //删除操作
    delte(id: number): boolean;
    //获取操作
    get(id: number): any[];
}

class MysqlDb<T> implements DBI<T>{
    constructor(){
        console.log("初始化 MysqlDb 信息");
    }
    //添加操作
    add(data: T): boolean {
        console.log('MysqlDb add');
        console.log(data);
        return true;
    }
    //更新操作
    update(data: T, id: number): boolean {
        return true;
    }
    //删除操作
    delte(id: number): boolean {
        return true;
    }
    //获取操作
    get(id: number): any[] {
        return [];
    }
}

class MsSqlDb<T> implements DBI<T>{
    constructor(){
        console.log("初始化 MsSqlDb 信息");
    }
    //添加操作
    add(data: T): boolean {
        console.log('MsSqlDb add');
        console.log(data);
        return true;
    }
    //更新操作
    update(data: T, id: number): boolean {
        return true;
    }
    //删除操作
    delte(id: number): boolean {
        return true;
    }
    //获取操作
    get(id: number): any[] {
        return [];
    }
}

class MongoDb<T> implements DBI<T>{
    constructor(){
        console.log("初始化 MongoDb 信息");
    }
    //添加操作
    add(data: T): boolean {
        return true;
    }
    //更新操作
    update(data: T, id: number): boolean {
        return true;
    }
    //删除操作
    delte(id: number): boolean {
        return true;
    }
    //获取操作
    get(id: number): any[] {
        return [];
    }
}

//操作用户表
class User{
    username:string | undefined;
    password:string | undefined;
}

var u = new User();
u.username = 'admin';
u.password = '123456';

//类作为参数来约束数据传入的类型
var mysql = new MysqlDb<User>();
mysql.add(u);

//类作为参数来约束数据传入的类型
var mssql = new MsSqlDb<User>();
mssql.add(u);
