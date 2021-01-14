"use strict";
//可索引接口：数组、对象的约束（不常用）
{
    //数组约束
    {
        var arr1 = ['aaa', 'bbb'];
        console.log(arr1[0]);
    }
    //对象约束
    {
        var arr2 = { name: '张三', age: "20" };
        console.log(arr2.name);
    }
}
//类类型接口：对类的约束，和抽象类有点相似
{
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + '吃骨头');
        };
        return Dog;
    }());
    var p1 = new Dog("小狗");
    p1.eat();
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.eat = function () {
            console.log(this.name + '吃老鼠');
        };
        return Cat;
    }());
    var p2 = new Cat("加非猫");
    p2.eat();
}
