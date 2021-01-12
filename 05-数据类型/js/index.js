"use strict";
//数据类型
// 07-任意类型(any)
// 08-null和undefined
// 09-void类型
// 10-never类型
// 07-任意类型(any)
{
    var variable_07 = false;
    //输出值到控制台
    console.log("01-任意类型(any)=" + variable_07);
    variable_07 = 123;
    //输出值到控制台
    console.log("02-任意类型(any)=" + variable_07);
    variable_07 = [1, 2, 3, 4, 5];
    //输出值到控制台
    console.log("03-任意类型(any)=" + variable_07);
}
// 08-null和undefined
{
    // 示例1
    {
        var variable_08_1;
        //赋值(只能等于undefined)
        variable_08_1 = undefined;
        //输出值到控制台
        console.log("01-任意类型(any)=" + variable_08_1); //输出undefined
    }
    // 示例2
    {
        var variable_08_2;
        //赋值(只能等于null)
        variable_08_2 = null;
        //输出值到控制台
        console.log("02-任意类型(any)=" + variable_08_2); //输出null
    }
    // 示例3
    // 注：一个变量可以设置多个类型
    {
        var variable_08_3;
        //赋值(只能等于null)
        variable_08_3 = 123;
        //输出值到控制台
        console.log("02-任意类型(any)=" + variable_08_3); //输出123
    }
    // 示例4
    // 错误的写法
    // 编绎器报错、编绎报错
    {
        var variable_08_4;
        //输出值到控制台
        console.log("02-任意类型(any)=" + variable_08_4); //输出undefined
    }
}
// 09-void
// 用于修饰方法，没有返回值
// 例1 - ES5 方法定义
////////////////////////////////////////////////////////////////////////////////
//没有返回值
////////////////////////////////////////
//定义方法
function run1() {
    console.log("run1"); //输出run1
}
//调用方法
run1();
////////////////////////////////////////
//有返回值
////////////////////////////////////////
//定义方法
function run2() {
    return "run2";
}
//调用方法
var result1 = run2();
console.log(result1); //输出run2
////////////////////////////////////////////////////////////////////////////////
// 例2 - ES6 方法定义
////////////////////////////////////////////////////////////////////////////////
//没有返回值
////////////////////////////////////////
function run3() {
    console.log("run3");
}
//调用方法
run3();
////////////////////////////////////////
//有返回值
////////////////////////////////////////
//定义方法
function run4() {
    return 123;
}
//调用方法
var result2 = run4();
console.log(result2); //输出123
////////////////////////////////////////////////////////////////////////////////
// 10-never类型
// 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值 
// 这意味着声明 never 的变量只能被 never 类型所赋值。
{
    //例1
    {
        //声明变量
        var variable_10_1;
        //赋值(注：只能等于null)
        variable_10_1 = null;
        //输出值到控制台
        console.log("01-10-never类型=" + variable_10_1);
    }
    //例2
    {
        //声明变量
        var variable_10_2;
        //赋值(注：只能等于undefined)
        variable_10_2 = undefined;
        //输出值到控制台
        console.log("02-10-never类型=" + variable_10_2);
    }
    //例3
    //正确写法
    {
        //声明变量
        var variable_10_3;
        //赋值(创建抛出异常)
        variable_10_3 = (function () {
            throw new Error("错误1");
        })();
        //输出值到控制台
        console.log("03-10-never类型=" + variable_10_3);
    }
    //例4
    //错误写法
    {
        //声明变量
        var variable_10_4;
        //赋值
        variable_10_4 = 123;
        //输出值到控制台
        console.log("04-10-never类型=" + variable_10_3);
    }
}
