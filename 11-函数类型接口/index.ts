//函数类型接口：对方法传入的参数以及返回值进行约束 批量约束。

//加密的函数类型接口
interface encrypt{
    (key:string,value:string):string;
}

var md5:encrypt = function(key:string, value:string):string{
    return key + value;
}

var sha1:encrypt = function(key:string, value:string):string{
    return key + value;
}