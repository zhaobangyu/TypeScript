//1、函数的定义
    //es5写法
    //1-1-1
    function fun1_1_1(val1,val2){
        return ['fun1_1_1',val1,val2].join('_');
    }

    //1-1-2
    //匿名函数
    var fun1_1_2 = function(val1,val2){
        return ['fun1_1_2',val1,val2].join('_');
    }

    //es6写法
    //1-2-1
    function fun1_2_1(val1:string,val2:string):string{
        return ['fun1_2_1',val1,val2].join('_');
    }

    //1-2-2
    //匿名函数
    var fun1_2_2 = function fun1_2_2(val1:string,val2:string):string{
        return ['fun1_2_2',val1,val2].join('_');
    }

    //输出函数返回值 
    console.log("1、函数的定义");
    console.log(fun1_1_1('val1', 'val2'));
    console.log(fun1_1_2('val1', 'val2'));
    console.log(fun1_2_1('val1', 'val2'));
    console.log(fun1_2_2('val1', 'val2'));
    console.log("\n\n");


//2、可选参数
//注：？标识可选参数
//注：可选参数必须配置在最后面
    function fun2_1(name:string age?:number):string{
        if(age){
            return [name,age].join(" ");
        }
        else{
            return name;
        }
    }
    //输出函数返回值 
    console.log("2、可选参数");
    console.log("1：" + fun2_1('kitty'));
    console.log("2：" + fun2_1('kitty', 19));
    console.log("\n\n");

//3、默认参数
//注：不传递则使用默认值
    function fun3_1(name:string age:number=20):string{
        if(age){
            return [name,age].join(" ");
        }
        else{
            return name;
        }
    }
    //输出函数返回值 
    console.log("3、默认参数");
    console.log("1：" + fun3_1('kitty'));
    console.log("2：" + fun3_1('kitty', 19));
    console.log("\n\n");

//4、剩余参数
//别名：三点运算符
    function fun4_1(val1:number,val2:number,...result:number[]):number{
        var sum:number = val1 +val2;
        for(var i:number = 0; i<result.length; i++){
            sum += result[i];
        }
        return sum;
    }
    //输出函数返回值 
    console.log("4、剩余参数");
    console.log("1：" + fun4_1(1,2,3,4,5,6,7,8));
    console.log("\n\n");

//5、函数重载
    function fun5_1(name:string):string;
    function fun5_1(name:string, age:number):string;
    function fun5_1(name:any, age?:any):any{
        if(age){
            return 'my name is ' + name + ' ' + 'and age is ' +　age;
        }
        else {
            return 'my name is ' + name;
        }
    }


    //输出函数返回值 
    console.log("5、函数重载");
    console.log("1：" + fun5_1('zhao'));
    console.log("2：" + fun5_1('zhao',20));
    console.log("\n\n");

//6、箭头函数(es6)
    setTimeout(()=>{
        //输出函数返回值 
        console.log("6、箭头函数");
        console.log("\n\n");
    },1000);


    
