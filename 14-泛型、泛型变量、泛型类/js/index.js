"use strict";
/*
泛型：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。
组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系
统时为你提供十分灵活的功能。

在像C#和JAVA这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。
这样用户就可以以自己的数据类型来使用组件。

通俗理解：泛型就是解决类、接口、方法的复用性、以及对不特定数据类型的支持。
 */
//泛型：可以支持不特定的数据类型 要求：传入的参数和返回的参数一致
//示例1
//注:泛型定义,简单的方法传参
{
    var Examples = /** @class */ (function () {
        function Examples() {
        }
        //获取数据
        Examples.prototype.getData = function (value) {
            return value;
        };
        return Examples;
    }());
    //调用示例
    var p1 = new Examples();
    //调用示例1
    p1.getData(123);
    //调用示例2
    p1.getData("123");
}
//示例2
//注:泛型类：最小堆算法，需要同时支持返回数字和字符串两种类型。通过类的泛型来实现
{
    //获取最小值
    var MinClass = /** @class */ (function () {
        function MinClass() {
            this.list = [];
        }
        //设置数据
        MinClass.prototype.setList = function (list) {
            this.list = list;
        };
        MinClass.prototype.getMinValue = function () {
            //数据长度验证
            if (this.list.length <= 0) {
                return undefined;
            }
            var minVal = this.list[0];
            for (var i = 0; i < this.list.length; i++) {
                //下标数据
                var itemVal = this.list[i];
                if (itemVal < minVal) {
                    minVal = itemVal;
                }
            }
            return minVal;
        };
        return MinClass;
    }());
    //调用
    var p2 = new MinClass();
    //设置数据
    p2.setList([5, 2, 3, 11, 90, 23]);
    //获取最小值
    console.log('number minVal=' + p2.getMinValue());
    //调用
    var p3 = new MinClass();
    //设置数据
    p3.setList(['s', 'd', 'e', 'f', 'q', 'a']);
    //获取最小值
    console.log('string minVal=' + p3.getMinValue());
}
