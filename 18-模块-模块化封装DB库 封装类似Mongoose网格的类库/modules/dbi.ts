interface DBI<T> {
    //添加操作
    add(data: T): boolean;
    //更新操作
    update(data: T, id: number): boolean;
    //删除操作
    delte(id: number): boolean;
    //获取操作
    get(id: number): any[];
}

export default DBI;