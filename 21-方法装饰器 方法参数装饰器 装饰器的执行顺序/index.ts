
/*
 方法装饰器
 它会被应用到方法的属性描述符上，可以用来监视，修改或者替换方法定义。
 1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 2、成员的名字
 3、成员的属性描述符
 */

/**
 * 方法装饰器
 * @param params 传入参数
 */
function On_Methond_Get(params: any) {
    //target 当前类
    //name   方法名称
    //desc   方法描述
    return function (target: any, name: any, desc: any) {
        target.url = params;
    }
}

/**
 * 方法装饰器
 * @param params 传入参数
 */
function On_Methond_Pos() {
    //target 当前类
    //name   方法名称
    //desc   方法描述
    return function (target: any, name: any, desc: any) {
        var methond = desc.value;
        desc.value = function () {
            console.log('方法装饰器-重写方法演示->我是重写的pos方法');
        }
    }
}

/**
 * 方法装饰器
 * @param params 传入参数
 */
function On_Methond_Set() {
    //target 当前类
    //name   方法名称
    //desc   方法描述
    return function (target: any, name: any, desc: any) {
        var methond = desc.value;
        desc.value = function () {
            methond.apply();
            console.log('方法装饰器-修改演示->我是重写的set方法');
        }
    }
}

//方法装饰器-使用示例
{
    class Examples {
        public url: any | undefined;
        constructor() {

        }

        @On_Methond_Get('http://www.baidu.com')
        get() {
            return this.url;
        }


        //演示重写
        @On_Methond_Pos()
        pos() {
            console.log('方法装饰器->我是原生的pos方法');
        }

        //演示修改(即先执行原生set 再执行修改后的set)
        @On_Methond_Set()
        set() {
            console.log('方法装饰器-修改演示->我是原生的set方法');
        }
    }

    var examples: any = new Examples();
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
function On_Methond_Params(params: any) {
    //target 当前类
    //name   参数名字
    //index  参数在函数列表中的索引
    return function (target: any, name: any, index: any) {
        
    }
}

//方法参数装饰器-使用示例
{
    class Examples {
        public url: any | undefined;
        constructor() {

        }

        get(@On_Methond_Params('uuid') uuid:any, @On_Methond_Params('uname') uname:any) {
            return 'admin_123456';
        }
    }

    var examples: any = new Examples();
    console.log('方法参数装饰器=' + examples.get());
}