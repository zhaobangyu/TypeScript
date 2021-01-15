"use strict";
/*
 方法装饰器
 它会被应用到方法的属性描述符上，可以用来监视，修改或者替换方法定义。
 1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 2、成员的名字
 3、成员的属性描述符
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * 方法装饰器
 * @param params 传入参数
 */
function On_Methond_Get(params) {
    //target 当前类
    //name   方法名称
    //desc   方法描述
    return function (target, name, desc) {
        target.url = params;
    };
}
/**
 * 方法装饰器
 * @param params 传入参数
 */
function On_Methond_Pos() {
    //target 当前类
    //name   方法名称
    //desc   方法描述
    return function (target, name, desc) {
        var methond = desc.value;
        desc.value = function () {
            console.log('方法装饰器-重写方法演示->我是重写的pos方法');
        };
    };
}
/**
 * 方法装饰器
 * @param params 传入参数
 */
function On_Methond_Set() {
    //target 当前类
    //name   方法名称
    //desc   方法描述
    return function (target, name, desc) {
        var methond = desc.value;
        desc.value = function () {
            methond.apply();
            console.log('方法装饰器-修改演示->我是重写的set方法');
        };
    };
}
//方法装饰器-使用示例
{
    var Examples = /** @class */ (function () {
        function Examples() {
        }
        Examples.prototype.get = function () {
            return this.url;
        };
        //演示重写
        Examples.prototype.pos = function () {
            console.log('方法装饰器->我是原生的pos方法');
        };
        //演示修改(即先执行原生set 再执行修改后的set)
        Examples.prototype.set = function () {
            console.log('方法装饰器-修改演示->我是原生的set方法');
        };
        __decorate([
            On_Methond_Get('http://www.baidu.com')
        ], Examples.prototype, "get", null);
        __decorate([
            On_Methond_Pos()
        ], Examples.prototype, "pos", null);
        __decorate([
            On_Methond_Set()
        ], Examples.prototype, "set", null);
        return Examples;
    }());
    var examples = new Examples();
    console.log('方法装饰器=' + examples.get());
    examples.pos();
    examples.set();
}
/*
 方法参数装饰器
 参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入下列3个参数：
 1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 2、参数的名字
 3、参数在函数参数列表中的索引
 */
/**
* 方法参数装饰器
* @param params 传入参数
*/
function On_Methond_Params(params) {
    //target 当前类
    //name   参数名字
    //index  参数在函数列表中的索引
    return function (target, name, index) {
    };
}
//方法参数装饰器-使用示例
{
    var Examples = /** @class */ (function () {
        function Examples() {
        }
        Examples.prototype.get = function (uuid, uname) {
            return 'admin_123456';
        };
        __decorate([
            __param(0, On_Methond_Params('uuid')), __param(1, On_Methond_Params('uname'))
        ], Examples.prototype, "get", null);
        return Examples;
    }());
    var examples = new Examples();
    console.log('方法参数装饰器=' + examples.get());
}
