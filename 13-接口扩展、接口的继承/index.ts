//接口扩展：接口可以继承接口
{
    interface Animal {
        eat(): void;
    }

    interface Person extends Animal {
        work(): void;
    }

    //示例1
    //类实现接口
    {
        class Web implements Person {
            public name: string;
            constructor(name: string) {
                this.name = name;
            }

            eat() {
                console.log(this.name + '吃馒头');
            }

            work() {
                console.log(this.name + '写代码');
            }
        }

        var p1 = new Web('小明');
        p1.eat();
        p1.work();
    }

    //示例2
    //类继承其它类并实现接口
    {
        class Programmer{
            public name:string;
            constructor(name:string){
                this.name = name;
            }

            coding(code:string){
                console.log(this.name + code);
            }
        }

        class Web extends Programmer implements Person{
            constructor(name:string){
                super(name);
            }

            eat() {
                console.log(this.name + '吃馒头');
            }

            work() {
                console.log(this.name + '写代码');
            }
        }

        var p2 = new Web('小张');
        p2.eat();
        p2.work();
        p2.coding('写C++');
    }
}