export var dbUrl = 'xxxxxx';

export function getData1():any[]{
    console.log('获取数据1');

    return [
        {
            title:'111111'
        },
        {
            title:'222222'
        }
    ];
}

export function getData2():any[]{
    console.log('获取数据2');

    return [
        {
            title:'111111'
        },
        {
            title:'222222'
        }
    ];
}

//或者通过下面的方式暴露
// export {dbUrl, getData1, getData2}