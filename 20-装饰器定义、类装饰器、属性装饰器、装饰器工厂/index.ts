/*
    装饰器：装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。

    通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。

    常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器

    装饰器的写法：普遍装饰器（无法传参）、装饰器工厂（可传参）

    装饰器是过去几年中js最大的成就之一，也是 ES7 的标准特性之一

    装饰器的执行顺序
    属性 > 方法 > 方法参数 > 类
    注：如果存在多个同类型装饰器，先执行后面再执行前面

 */

/*
    装饰器：装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。

    通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。

    常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器

    装饰器的写法：普遍装饰器（无法传参）、装饰器工厂（可传参）

    装饰器是过去几年中js最大的成就之一，也是 ES7 的标准特性之一

    装饰器的执行顺序
    属性 > 方法 > 方法参数 > 类
    注：如果存在多个同类型装饰器，先执行后面再执行前面

 */

 /*
  类装饰器
  类装饰器在类声明之前被声明（紧靠着类声明）
  类装饰器应用于构造函数，可以用来监视，修改或替换类定义。传入一个参数
  类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
  如果类装饰器返回一个值，它会使提供的构造函数来替换类的声明。
  */

 /**
 * 1、普通类装饰器(不能传参)
 * @param target        //当前的类
 */
function On_Ordinary_Class(target: any) {
    //扩展属性
    target.prototype.ordinary_Value = '动态扩展的属性';
    //动态扩展的方法
    target.prototype.ordinary_Function = function () {
        console.log('普通类装饰器 ordinary_Function');
    }
}

//普通类装饰器-使用示例
{
    @On_Ordinary_Class
    class Examples {
        constructor() {

        }
    }

    var examples: any = new Examples();
    //使用扩展的方法
    examples.ordinary_Function();
    //使用扩展的属性
    console.log('普通类装饰器=' + examples.ordinary_Value);
}

/**
 * 2、类装饰器工厂(可传参)
 * @param params        传入的参数
 */
function On_Factory_Class(params: any) {
    //target 当前类
    return function (target: any) {
        //扩展属性
        target.prototype.url = params;
        //扩展的方法
        target.prototype.getUrl = function () {
            return this.url;
        }
    }
}

//类装饰器工厂-使用示例
{
    @On_Factory_Class('http:www.baidu.com')
    class Examples {
        constructor() {

        }

        get() {
            console.log('我是原生的get方法');
        }
    }

    var examples: any = new Examples();
    console.log('类装饰器工厂 getUrl=' + examples.getUrl());
}


/**
 * 3、普通类装饰器-重载构造函数
 * @param target 当前类
 */
function On_Factory_HeavyLoad_Class(target: any) {
    return class extends target {
        url: any = '我是修改后的url变量';
        get() {
            console.log('类装饰器工厂-重载构造函数->我是修改后的get方法');
        }
    }
}

//类装饰器工厂-重载构造函数-使用示例
{
    @On_Factory_HeavyLoad_Class
    class Examples {
        public url: string | undefined;
        constructor() {
            this.url = '我是原生的url变量';
        }

        get() {
            console.log('类装饰器工厂-重载构造函数->我是原生的get方法');
        }
    }

    var examples: any = new Examples();
    console.log('类装饰器工厂-重载构造函数->' + examples.url);
    examples.get();
}

 /*
  属性装饰器
  属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
  1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
  2、成员的名字
  */

/**
 * 4、属性装饰器
 * @param params 
 */
function On_Attribute(params: string){
    //target 当前类
    //attr   成员的名字
    return function(target:any, attr:any){
        //设置属性值
        target[attr] = params;
    }
}

//4、属性装饰器-使用示例
{
    class Examples {
        @On_Attribute('http://www.baidu.com')
        public url: string | undefined;
        constructor() {
        }
    }
    var examples: any = new Examples();
    console.log('属性装饰器->' + examples.url);
}

