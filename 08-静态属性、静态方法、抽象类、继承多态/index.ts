// TypeScript中的类
// 4、静态属性、静态方法
// 5、抽象类、继承、多态

// 4、静态属性、静态方法
{
    // class Person{
    //     //性别
    //     static sex = '男';    
    //     //构造函数
    //     constructor(){
    //     }

    //     //获取姓名(静态方法)
    //     static getName():string{
    //         return '张三';
    //     }

    //     //获取性别(静态方法)
    //     static getSex():string{
    //         return Person.sex;
    //     }
    // }

    // alert('姓名='+Person.getName());
    // alert('性别='+Person.getSex());
}

//5、抽象类、继承、多态
//5-1、多态
//父类定义一个方法不实现，让继承它的子类云实现，每一个子类有不同的表现
{
    // class Animal{
    //     //名称
    //     public name:string;
    //     //构造函数
    //     constructor(name:string){
    //         this.name = name;
    //     }

    //     //获取名称
    //     getName(){
    //         return this.name;
    //     }

    //     eat():string{
    //         return '';
    //     }
    // }

    // //小狗-子类
    // class Dog extends Animal{
    //     constructor(name:string){
    //         super(name);
    //     }

    //     eat():string{
    //         return this.getName() + '吃骨头';
    //     }
    // }

    // //小猫-子类
    // class Cat extends Animal{
    //     constructor(name:string){
    //         super(name);
    //     }

    //     eat():string{
    //         return this.getName() + '吃鱼';
    //     }
    // }

    // var p1 = new Dog('泰迪');
    // alert(p1.eat());

    // var p2 = new Cat('加菲猫');
    // alert(p2.eat());
}

//5-2、抽象类，抽象方法
// TypeScript 中的抽象类，它是提供其它类继承的基类，不能直接被实例化。
// 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
// abstract 抽象方法只能放在抽象类里面
// 抽象类和抽象方法用来定义标准
{
    abstract class Animal{
        //名称
        public name:string;
        //构造函数
        constructor(name:string){
            this.name=name;
        }
        //获取名称
        getName(){
            return this.name;
        }

        abstract eat():string;
    }

    //小狗-子类
    class Dog extends Animal{
        constructor(name:string){
            super(name);
        }

        eat():string{
            return this.getName() +  '吃骨头';
        }
    }

    var p1 = new Dog('泰迪');
    alert(p1.eat());
}