define([
    'jquery',
    'bootstrap',
    'header',
    'aside',
    'jquery_cookie',
    'nprogress',
    'util'
], function($, ud , ud ,ud ,ud  ,nprogress ,util) {
    // 页面上部的进度条
    nprogress.start();
    $(function(){
        nprogress.done();
    })
    // 缓冲 页面 （齿轮）
    util.loading();
    // 调用util的方法 检查是否用户是否登录  (未登录直接跳到登录页面去)
    util.checkLoginStatus();  
});