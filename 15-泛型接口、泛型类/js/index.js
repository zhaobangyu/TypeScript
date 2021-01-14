"use strict";
//普通接口
{
    //设置数据
    var setData1 = function (val1, val2) {
        return val1 + val2;
    };
    console.log('setData1 result=' + setData1('张', '三'));
}
//泛型接口
{
    //写法1
    {
        //设置数据
        var setData2 = function (val1) {
            return val1;
        };
        console.log('setData2-1 result=' + setData2('张'));
        console.log('setData2-2 result=' + setData2(1111));
    }
    //写法2
    {
        //设置数据
        var setData3 = function (val1) {
            return val1;
        };
        var mySetDataString = setData3;
        var mySetDataNumber = setData3;
        console.log('setData3-1 result=' + mySetDataString('张'));
        console.log('setData3-2 result=' + mySetDataNumber(1111));
    }
}
