"use strict";
/*
 模块的概念（官方）：
    关于术语的一点说明：请务必注意一点，TypeScript 1.5里术语名已经发生了变化。“内部模块”现在称为“命名空间”。
 这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的，除非你明确地使用 export 形式之王导出它们。
 相反，如果想使用其它模块导出的变量，函数，类，接口等的时候，你必须要导入它们，可以使用 import 形式之一。
 
 模块的概念（我的理解）：
    我们可以把一些公共的功能单独抽离成一个文件作为 一个模块。
    模块里面的变量 函数 类等默认是私有的，如果我们要在外部访问模块里面的数据（变量、函数、类），
    我们需要通过 exprot 暴露模块里面的数据（变量、函数、类...）。
    暴露后我们通过 import 引入模块就可以使用模块里面暴露的数据（变量、函数、类...）。

 export default 默认导出
    每个模块都可以有一个 default 导出。默认导出使用 default 关键字标记，并且一个模块只能够有一个 default 导出。
    需要使用一种特殊的导入形式来实现。
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//项目测试说明
//1、打CMD命令窗口
//2、进入js目录
//3、执行命令 node index.js
//示例1
//说明:模块方法的引入
var examples1_1 = require("./modules/examples1");
//通过 as 修改引入名称
var examples1_2 = require("./modules/examples1");
{
    examples1_1.getData1();
    examples1_1.getData2();
    examples1_2.getData1();
    examples1_2.getData2();
    console.log(examples1_1.dbUrl);
}
//示例2
//说明:export default引入
var examples2_1 = __importDefault(require("./modules/examples2"));
{
    examples2_1.default();
}
//示例3
//说明:引入mysqldb
var mssqsldb_1 = __importDefault(require("./modules/mssqsldb"));
{
    //操作用户表
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    var u = new User();
    u.username = 'admin';
    u.password = '123456';
    //创建db类
    var mysql = new mssqsldb_1.default();
    mysql.add(u);
}
//示例4
//说明:封装User表操作
var user_1 = require("./model/user");
{
    //增加数据
    var u = new user_1.UserClass();
    u.username = 'admin';
    u.password = '123456';
    user_1.UserModel.add(u);
    var res = user_1.UserModel.get(123);
    console.log(res);
}
