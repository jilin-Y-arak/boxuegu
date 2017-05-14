define([
    'jquery',
    'bootstrap',
    'header',
    'aside',
    'jquery_cookie',
    'nprogress',
    'util'
], function($, ud , ud ,ud ,ud  ,nprogress ,util) {

// 封装方法 1 的调用模式 （废弃）
    // // 缓冲 页面 （齿轮）
    // util.loading();
    // // 调用util的方法 检查是否用户是否登录  (未登录直接跳到登录页面去)
    // util.checkLoginStatus();  


// 封装方法 2  的调用模式
//  util返回每一个方法的返回值，想用那个用那个，不用拉到
    var returns = util({
        ' checkLoginStatus' : [] ,
        'loading' : []

    })


 // 销毁页面上部的进度条 结束
    $(function(){
        nprogress.done();
    })
});