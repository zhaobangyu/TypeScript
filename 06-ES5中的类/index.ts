// 1.简单的类
// function Person(){
//     this.name = '张三';
//     this.age = 20;
// }

// var p = new Person();
// alert(p.name);

// // 2.构造函数和原型链里面增加方法
// function Person(){
//     this.name = '张三';
//     this.age = 20;
//     this.run = function(){
//         alert(this.name + '在运动');
//     }
// }

// // 原型链上面的属性会被多个实例共享,构造函数不会
// Person.prototype.sex = '男';
// Person.prototype.work = function(){
//     alert(this.name + '在工作');
// }

// var p1 = new Person();
// alert(p1.sex);
// p1.run();
// p1.work();

// //修改sex
// p1.sex = '女';

// var p2 = new Person();
// //创建p2时不需要再对sex申明，sex属性在原型链上被共享
// alert("p2.sex=" + p2.sex);

// //3.类里的静态方法
// function Person(){
//     this.name = '张三';
//     this.age = 20;
//     this.run = function(){
//         alert(this.name + '在运动');
//     }
// }

// Person.getInfo = function(){
//     alert("我是静态方法");
// }

// //调用静态方法
// Person.getInfo();
// Person.prototype.sex = "男";
// Person.prototype.work = function(){
//     alert(this.name + '在工作');
// }
// var p = new Person();
// p.work();

// //4.es5里面的继承 对象冒充实现继承
// function Person(){
//     this.name='张三';  /*属性*/
//     this.age=20;
//     this.run=function(){  /*实例方法*/
//         alert(this.name+'在运动');
//     }

// }      
// Person.prototype.sex="男";
// Person.prototype.work=function(){
//         alert(this.name+'在工作');
// }

// //Web类 继承Person类 （原型链+对象冒充的组合继承模式）
// function Web(){
//     Person.call(this);  //对象冒充实现继承
// }

// var w = new Web();
// w.run();    //对象冒充可以继承构造函数里面的属性和方法
// //这行代码会报错，找不到work方法，因为work属性原型链上的方法
// w.work();   //对象冒充可以继承构造函数里面的属性和方法 但是没法继承原型链上面的属性和方法

// //5.es5里面的继承 原型链实现继承
//        function Person(){
//             this.name='张三';  /*属性*/
//             this.age=20;
//             this.run=function(){  /*实例方法*/
//                 alert(this.name+'在运动');
//             }

//         }      
//         Person.prototype.sex="男";
//         Person.prototype.work=function(){
//              alert(this.name+'在工作');

//         }
       
//         //Web类 继承Person类   原型链+对象冒充的组合继承模式

//         function Web(){
         
//         }

//         Web.prototype = new Person();   //原型链实现继承
//         var w = new Web();
//         //原型链实现继承:可以继承构造函数里面的属性和方法 也可以继承原型链上面的属性和方法
//         w.run();
//         w.work();

// // 6.原型链实现继承的问题？
// function Person(name,age){
//     this.name=name;  /*属性*/
//     this.age=age;
//     this.run=function(){  /*实例方法*/
//         alert(this.name+'在运动');
//     }

// }      

// Person.prototype.sex="男";
// Person.prototype.work=function(){
//         alert(this.name+'在工作');
// }

// // var p=new Person('李四',20);
// // p.run();
// function Web(name,age){}

// Web.prototype=new Person();

// //实例化子类的时候没法给父类传参
// var w1 = new Web('赵四',20);
// w1.run();   //输出'undefined在运动'

// 7.原型链+对象冒充的组合继承模式
// function Person(name,age){
//     this.name=name;  /*属性*/
//     this.age=age;
//     /*实例方法*/
//     this.run=function(){  
//     alert(this.name+'在运动');
//     }
// }
  
// Person.prototype.sex="男";
// Person.prototype.work=function(){
//     alert(this.name+'在工作');
// }

// function Web(name,age){
//     //对象冒充继承，实例化子类可以父类传参
//     Person.call(this, name, age);   
// }

// Web.prototype = new Person();

// var w = new Web('赵四',20);
// w.run();
// w.work();

// 8.原型链+对象冒充继承的另一种方式
function Person(name,age){
    this.name=name;  /*属性*/
    this.age=age;
    this.run=function(){  /*实例方法*/
        alert(this.name+'在运动');
    }

}      
Person.prototype.sex="男";
Person.prototype.work=function(){
    alert(this.name+'在工作');

}

function Web(name,age){
    Person.call(this,name,age);   //对象冒充继承  可以继承构造函数里面的属性和方法、实例化子类可以给父类传参
} 

//Web.prototype = new Person();
//区别
//Web.prototype=Person.prototype;
Web.prototype=Person.prototype;
var w=new Web('赵四',20); 
w.run();
w.work();