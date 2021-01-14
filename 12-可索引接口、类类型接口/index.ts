//可索引接口：数组、对象的约束（不常用）
{
    //数组约束
    {
        interface UserArr{
            [indx:number]:string
        }
        
        var arr1:UserArr = ['aaa','bbb'];
        console.log(arr1[0]);
    }

    //对象约束
    {
        interface UserObj{
            [index:string]:string
        }

        var arr2:UserObj = {name:'张三',age:"20"};
        console.log(arr2.name);
    }
}

//类类型接口：对类的约束，和抽象类有点相似
{
    interface Animal{
        name:string;
        eat(str:string):void;
    }

    class Dog implements Animal{
        name:string;
        constructor(name:string){
            this.name = name;
        }

        eat(){
            console.log(this.name + '吃骨头');
        }
    }

    var p1 = new Dog("小狗");
    p1.eat();

    class Cat implements Animal{
        name:string;
        constructor(name:string){
            this.name = name;
        }

        eat(){
            console.log(this.name + '吃老鼠');
        }
    }

    var p2 = new Cat("加非猫");
    p2.eat();
}