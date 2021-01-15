/*
 命名空间：
    在代码量较大的情况下，为了避免各种变量命名相冲突，可将相似功能的函数、类、接口放置到命名空间内
    
    同Java的包、.net的命名空间一样，TypeScript 的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象。
    命名空间内的对象通过 export 暴露。

 命名空间和模块的区别：
    命名空间:内部模块，主要用于组织代码，避免命名冲突。
    模    块:ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间。
 */

//示例1
//命名空间的使用
namespace A {
    export class Person {
        constructor() {

        }

        get() {
            console.log('this is A Person get');
        }
    }
}

namespace B {
    export class Person {
        constructor() {

        }

        get() {
            console.log('this is B Person get');
        }
    }
}

var Person1 = new A.Person();
Person1.get();

var Person2 = new B.Person();
Person2.get();

//示例2
//说明：命名空间+模块使用
import {C,D} from './modules/examples'

var Person3 = new C.Person();
Person3.get();

var Person4 = new D.Person();
Person4.get();
