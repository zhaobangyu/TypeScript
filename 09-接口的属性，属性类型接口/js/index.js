"use strict";
/*
 接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。
 接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供
 某些方法，提供这些方法的类就可以满足实际需要。
 TypeScript中的接口类似于Java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。
 定义标准。
 */
//  1、属性接口
{
    // class Person{
    //     constructor(){
    //     }
    //     //  对JSON的约束
    //     //自定义方法传入参数对 JSON 进行约束
    //     //说明：传入的参数必须为对象且必须包含label，label为string类型
    //     static printLabel(labelInfo:{label:string}):void{
    //         alert(labelInfo.label);
    //     }
    // }
    // // Person.printLabel(123); //错误写法 传入参数不是对象
    // // Person.printLabel({name:'张三'}); //错误写法 原因：未包含label
    // // Person.printLabel({label:1}); //错误写法 原因：label必须为string
    // Person.printLabel({label:'张三'}); //正确写法
}
// 对指方法传入参数进行约束
// 接口：行为和动作的规范，对指方法进行约束
{
    // interface FullName {
    //     //定义变量
    //     firstName: string;
    //     secondName: string;
    // }
    // class Person {
    //     constructor() {
    //     }
    //     //输出
    //     static printName(name: FullName) {
    //         alert(name.firstName + '&' + name.secondName);
    //     }
    //     //输出
    //     static printInfo(name: FullName) {
    //         alert(name.firstName + '#' + name.secondName);
    //     }
    // }
    // //调用方式一
    // //注：传入对象只要包含接口定义的属性即可
    // {
    //     var obj = {
    //         age: 20,
    //         firstName: '张',
    //         secondName: '三'
    //     };
    //     Person.printName(obj);
    //     Person.printInfo(obj);
    // }
    // //调用方式二
    // // 注：传入对象包含属性必须与接口定义属性一致，无先后顺序要求
    // {
    //     Person.printName({
    //         firstName: '张',
    //         secondName: '三'
    //     });
    //     Person.printInfo({
    //         firstName: '张',
    //         secondName: '三'
    //     });
    // }
}
//接口：可选属性
{
    var Person = /** @class */ (function () {
        function Person() {
        }
        //输出
        Person.getName = function (name) {
            alert(name.firstName + '-' + name.secondName);
        };
        return Person;
    }());
    // 获取名称
    Person.getName({
        firstName: "张"
    });
}
