// TypeScript中的类
// 1、类的定义
// 2、继承
// 3、类里面的修饰符

// 1、类的定义
{
    // class Person1{
    //     //属性
    //     public name:string;    
    
    //     //构造函数
    //     constructor(name:string){
    //         this.name = name;
    //     }

    //     //获取名称
    //     getName():string{
    //         return this.name;
    //     }

    //     //设置名称
    //     setName(name:string):void{
    //         this.name = name;
    //     }
    // }

    // //创建类
    // var p1 = new Person1('张三');
    // //设置名称
    // p1.setName('李四');
    // //弹框显示
    // alert(p1.getName());
}

//2、继承 
//关键词：extends、super
{
    // class MainPerson{
    //     //属性
    //     public name:string;    
    
    //     //构造函数
    //     constructor(name:string){
    //         this.name = name;
    //     }

    //     //获取名称
    //     getName():string{
    //         return this.name;
    //     }

    //     //设置名称
    //     setName(name:string):void{
    //         this.name = name;
    //     }

    //     run():string{
    //         return [this.name,'父类执行run'].join('_');
    //     }
    // }

    // //SubPerson 类继承 MainPerson
    // class SubPerson extends MainPerson{
    //     constructor(name:string){
    //         super(name);
    //     }

    //     //子类与父类函数同名，子类覆盖父类方法
    //     run():string{
    //         return [this.name,'子类执行run'].join('_');
    //     }

    //     word():string{
    //         return [this.name,'在运动'].join('_');
    //     }
    // }

    // var p2 = new SubPerson('李二');
    // alert(p2.getName());
    // alert('run=' + p2.run());
    // alert('word=' + p2.word());
}

//3.类里面的修饰符
//关键词
// public       公有：在当前类里面、子类、类外面都可以访问
// protected    保护类型：在当前类里面、子类里面可以访问，在类外部无法访问
// private      私有：在当前类里面可以访问，子类，类外部无法访问
// 注：属性如果不加修饰符，默认为 public
{
    class MainPerson{
        //名称
        public name:string;
        //性别
        protected sex:number;
        //年龄
        private age:number;
        //构造函数
        constructor(name:string){
            this.name = name;
            this.sex = 0;
            this.age = 0;
        }

        //父类设置年龄
        setAge(age:number):void{
            this.age = age;
        }

        //父类获取年龄
        getAge(){
            return this.age;
        }
    }

    //SubPerson 类继承 MainPerson
    class SubPerson extends MainPerson{
        constructor(name:string){
            super(name);
        }

        //子类设置性别
        setSex(sex:number):void{
            this.sex = sex;
        }

        //获取年龄
        getSex():number{
            return this.sex;
        }

        //输出信息
        print():string{
            return '姓名：' + this.name + ' 性别：' + (this.getSex() == 0 ? '男' : '女') + ' 年龄：' + this.getAge();
        }
    }

    //创建对象
    var p3 = new SubPerson('李四');
    //修改名称
    p3.name = "李五";
    //设置性别
    p3.setSex(1);
    //设置年龄
    p3.setAge(20);
    //输出信息
    alert(p3.print());
}
