//普通接口
{
    interface ConfigFn{
        (value1:string, value2:string):string;
    }

    //设置数据
    var setData1:ConfigFn = function(val1:string, val2:string):string{
        return val1 + val2;
    }

    console.log('setData1 result=' + setData1('张','三'));
}

//泛型接口
{
    //写法1
    {
        interface ConfigFn{
            <T>(value1:T):T;
        }
    
        //设置数据
        var setData2:ConfigFn = function<T>(val1:T):T{
            return val1;
        }
    
        console.log('setData2-1 result=' + setData2<string>('张'));
        console.log('setData2-2 result=' + setData2<number>(1111));
    }

    //写法2
    {
        interface ConfigFn<T>{
            (value1:T):T;
        }
    
        //设置数据
        var setData3 = function<T>(val1:T):T{
            return val1;
        }

        var mySetDataString:ConfigFn<string> = setData3;
        var mySetDataNumber:ConfigFn<number> = setData3;

        console.log('setData3-1 result=' + mySetDataString('张'));
        console.log('setData3-2 result=' + mySetDataNumber(1111));
    }
}