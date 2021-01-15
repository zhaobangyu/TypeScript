/*
 泛类：泛型可以帮助我们避免重复的代码以及对不特定数据类型的支持（类型验证），下面我们看看把类当做参数的泛型类
 1、定义个类
 2、把类作为 参数来约束数据传入的类型
 */

  //示例1
  {
    class User{
        user:string | undefined;
        password:string | undefined;
    }

    class MysqlDb{
        add(user:User):boolean{
            console.log(user);
            return true;
        }
    }

    //调用
    var u = new User();
    u.user = 'admin';
    u.password = '123456';

    var db1 = new MysqlDb();
    db1.add(u);
  }

  //示例2
  {
    class ArticleCate{
        title:string | undefined;
        desc:string | undefined;
        status:number | undefined;
    }

    class MysqlDb{
        add(info:ArticleCate):boolean{
            console.log(info);
            return true;
        }
    }

    //调用
    var a = new ArticleCate();
    a.title = '新闻标题';
    a.desc = '2008年奥运会';
    a.status = 1;

    var db2 = new MysqlDb();
    db2.add(a);
  }

  //示例3
  //通过泛型将示例1与示例2的 MysqlDb 复用。
  {
    class MysqlDb<T>{
        add(data:T):boolean{
            console.log(data);
            return true;
        }
    }

    class User{
        user:string | undefined;
        password:string | undefined;
    }

    class ArticleCate{
        title:string | undefined;
        desc:string | undefined;
        status:number | undefined;
        //增加参数传入验证
        constructor(params:{
            title:string | undefined,
            desc:string | undefined,
            //可选参数
            status?:number | undefined
        }){
            this.title = params.title;
            this.desc = params.desc;
            this.status = params.status;
        }
    }

    //调用
    var u = new User();
    u.user = 'admin';
    u.password = '123456';

    var db3 = new MysqlDb<User>();
    db1.add(u);

    //调用
    var a = new ArticleCate({
        title:'新闻标题',
        desc:'2008年奥运会',
        status:1
    });
    

    var db4 = new MysqlDb<ArticleCate>();
    db4.add(a);
  }