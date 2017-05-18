define([
    'jquery',
    'header',
    'aside',
    'nprogress',
    'util',
    'jquery_form',
    'template'
], function ($, ud, ud, nprogress, util ,ud ,template) {

    // util返回每一个方法的返回值，想用那个用那个，不用拉到
    var returns = util({
        'loading': [], // // 缓冲 页面 （齿轮）
        'checkLoginStatus': [], //  检查是否用户是否登录  (未登录直接跳到登录页面去)
    });

// 获取course/add.html中的数据 到course/list.html中展示上

    $.get('/v6/course' , function(data){
        $('.courses').html(template('cousre-list-tpl',data))
    });

// 销毁进度条
    $(function () {
        nprogress.done();
    })
});