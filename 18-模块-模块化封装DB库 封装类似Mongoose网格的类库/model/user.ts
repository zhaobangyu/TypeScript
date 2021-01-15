
import MsSqlDb from '../modules/mssqsldb'
//操作用户表
class UserClass {
    username: string | undefined;
    password: string | undefined;
}

var u = new UserClass();
u.username = 'admin';
u.password = '123456';

var UserModel = new MsSqlDb<UserClass>();

//导出
export{
    UserClass, 
    UserModel
}

