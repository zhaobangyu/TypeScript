
import DBI from './DBI';
class MysqlDb<T> implements DBI<T>{
    constructor(){
        console.log("初始化 MysqlDb 信息");
    }
    //添加操作
    add(data: T): boolean {
        console.log('MysqlDb add');
        console.log(data);
        return true;
    }
    //更新操作
    update(data: T, id: number): boolean {
        return true;
    }
    //删除操作
    delte(id: number): boolean {
        return true;
    }
    //获取操作
    get(id: number): any[] {
        return [];
    }
}
export default MysqlDb;