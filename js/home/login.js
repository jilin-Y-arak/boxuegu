/**
 * jquery ADM模块 正常接收对外暴露的方法
 *  bootstarp 普通模块 没有对外暴露全局变量 接收到的值为undefined (ud)
 * jquery-form 普通模块 没有对外暴露全局变量 接收到的值为undefined (ud)
 */
define([ 'jquery','bootstrap', 'jquery_form'], function($, ud ,ud) { 
    // 形参用来接收模块的输出 可任意写名 但是 需按顺序
    // ajaxFor 是jquery-form的方法 可以直接使用 
    // 表单提交的的ajax请求
    $('#login-form').ajaxForm({
        success : function () {  
            location.href = '/';
        },
        error : function () { 
            console.log('登入失败，请重试');
         }
    });   
});

