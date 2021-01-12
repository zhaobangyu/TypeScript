"use strict";
/*
 接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。
 接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供
 某些方法，提供这些方法的类就可以满足实际需要。
 TypeScript中的接口类似于Java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。
 定义标准。
 */
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert('success');
            if (config.dataType == 'json') {
                alert(xhr.responseText);
            }
            else {
                alert(xhr.responseText);
            }
        }
    };
}
ajax({
    type: "GET",
    url: "http://a.itying.com/api/productlist",
    dataType: 'json'
});
