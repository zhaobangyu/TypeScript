"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//接口扩展：接口可以继承接口
{
    //示例1
    //类实现接口
    {
        var Web = /** @class */ (function () {
            function Web(name) {
                this.name = name;
            }
            Web.prototype.eat = function () {
                console.log(this.name + '吃馒头');
            };
            Web.prototype.work = function () {
                console.log(this.name + '写代码');
            };
            return Web;
        }());
        var p1 = new Web('小明');
        p1.eat();
        p1.work();
    }
    //示例2
    //类继承其它类并实现接口
    {
        var Programmer = /** @class */ (function () {
            function Programmer(name) {
                this.name = name;
            }
            Programmer.prototype.coding = function (code) {
                console.log(this.name + code);
            };
            return Programmer;
        }());
        var Web = /** @class */ (function (_super) {
            __extends(Web, _super);
            function Web(name) {
                return _super.call(this, name) || this;
            }
            Web.prototype.eat = function () {
                console.log(this.name + '吃馒头');
            };
            Web.prototype.work = function () {
                console.log(this.name + '写代码');
            };
            return Web;
        }(Programmer));
        var p2 = new Web('小张');
        p2.eat();
        p2.work();
        p2.coding('写C++');
    }
}
