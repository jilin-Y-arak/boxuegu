define([
    'jquery',
    'bootstrap',
    'header',
    'aside',
    'jquery_cookie',
    'nprogress',
    'util'
], function ($, ud, ud, ud, ud, nprogress, util) {

    // util返回每一个方法的返回值，想用那个用那个，不用拉到
    var returns = util({
        'loading': [], // // 缓冲 页面 （齿轮）
        'checkLoginStatus': [], //  检查是否用户是否登录  (未登录直接跳到登录页面去)
    });


// 销毁进度条
    nprogress.done();

});