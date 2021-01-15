"use strict";
/*
 泛类：泛型可以帮助我们避免重复的代码以及对不特定数据类型的支持（类型验证），下面我们看看把类当做参数的泛型类
 1、定义个类
 2、把类作为 参数来约束数据传入的类型
 */
//示例1
{
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    var MysqlDb = /** @class */ (function () {
        function MysqlDb() {
        }
        MysqlDb.prototype.add = function (user) {
            console.log(user);
            return true;
        };
        return MysqlDb;
    }());
    //调用
    var u = new User();
    u.user = 'admin';
    u.password = '123456';
    var db1 = new MysqlDb();
    db1.add(u);
}
//示例2
{
    var ArticleCate = /** @class */ (function () {
        function ArticleCate() {
        }
        return ArticleCate;
    }());
    var MysqlDb = /** @class */ (function () {
        function MysqlDb() {
        }
        MysqlDb.prototype.add = function (info) {
            console.log(info);
            return true;
        };
        return MysqlDb;
    }());
    //调用
    var a = new ArticleCate();
    a.title = '新闻标题';
    a.desc = '2008年奥运会';
    a.status = 1;
    var db2 = new MysqlDb();
    db2.add(a);
}
//示例3
//通过泛型将示例1与示例2的 MysqlDb 复用。
{
    var MysqlDb = /** @class */ (function () {
        function MysqlDb() {
        }
        MysqlDb.prototype.add = function (data) {
            console.log(data);
            return true;
        };
        return MysqlDb;
    }());
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    var ArticleCate = /** @class */ (function () {
        //增加参数传入验证
        function ArticleCate(params) {
            this.title = params.title;
            this.desc = params.desc;
            this.status = params.status;
        }
        return ArticleCate;
    }());
    //调用
    var u = new User();
    u.user = 'admin';
    u.password = '123456';
    var db3 = new MysqlDb();
    db1.add(u);
    //调用
    var a = new ArticleCate({
        title: '新闻标题',
        desc: '2008年奥运会',
        status: 1
    });
    var db4 = new MysqlDb();
    db4.add(a);
}
