import DBI from './DBI';
class MsSqlDb<T> implements DBI<T>{
    constructor() {
        console.log("初始化 MsSqlDb 信息");
    }
    //添加操作
    add(data: T): boolean {
        console.log('MsSqlDb add');
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
        return [{
            title: '111'
        }, {
            title: '222'
        }];
    }
}
export default MsSqlDb;