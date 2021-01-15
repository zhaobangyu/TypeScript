"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData2 = exports.getData1 = exports.dbUrl = void 0;
exports.dbUrl = 'xxxxxx';
function getData1() {
    console.log('获取数据1');
    return [
        {
            title: '111111'
        },
        {
            title: '222222'
        }
    ];
}
exports.getData1 = getData1;
function getData2() {
    console.log('获取数据2');
    return [
        {
            title: '111111'
        },
        {
            title: '222222'
        }
    ];
}
exports.getData2 = getData2;
//或者通过下面的方式暴露
// export {dbUrl, getData1, getData2}
