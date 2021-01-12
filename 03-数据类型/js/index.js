"use strict";
//数据类型
// 01-布尔类型(boolean)
// 02-数字类型(number)
// 03-字符串类型(string)
// 04-数组类型(array)
// 05-元组类型(tuple)
// 06-枚举类型(enum)
// 07-任意类型(any)
// 08-null和undefined
// 09-void类型
// 10-never类型
// 01-布尔类型(boolean)
var variable_01 = false;
console.log("布尔类型=" + variable_01);
// 02-数字类型(number)
var variable_02 = 10;
console.log("数字类型=" + variable_02);
// 03-字符串类型(string)
var variable_03 = "hello";
console.log("字符串类型=" + variable_03);
// 04-数组类型(array)
var variable_04_01 = [1, 2, 3, 4];
console.log("数组类型01=" + variable_04_01);
var variable_04_02 = [1, 2, 3, 4];
console.log("数组类型02=" + variable_04_02);
// 05-元组类型(tuple)
var variable_05 = ["hello", 100, false];
console.log("元组类型=" + variable_05);
// 06-枚举类型(enum)(默认值为索引,从0开始)
var variable_06_enum_01;
(function (variable_06_enum_01) {
    variable_06_enum_01[variable_06_enum_01["ok"] = 0] = "ok";
    variable_06_enum_01[variable_06_enum_01["fail"] = 1] = "fail";
})(variable_06_enum_01 || (variable_06_enum_01 = {}));
;
var variable_06_01 = variable_06_enum_01.ok;
//输出1
console.log("枚举类型01=" + variable_06_01);
//06-枚举类型(enum)(默认值为索引,从0开始)
var variable_06_enum_02;
(function (variable_06_enum_02) {
    variable_06_enum_02[variable_06_enum_02["ok"] = 0] = "ok";
    variable_06_enum_02[variable_06_enum_02["fail"] = 5] = "fail";
    variable_06_enum_02[variable_06_enum_02["unknow"] = 6] = "unknow";
})(variable_06_enum_02 || (variable_06_enum_02 = {}));
;
//输出0
console.log("枚举类型02-1=" + variable_06_enum_02.ok);
//输出5
console.log("枚举类型02-2=" + variable_06_enum_02.fail);
//输出6
console.log("枚举类型02-3=" + variable_06_enum_02.unknow);
