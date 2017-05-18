define([
    'jquery',
    'header',
    'aside',
    'jquery_form',
    'nprogress',
    'util'
], function ($,  ud, ud, ud, nprogress, util) {

    // util返回每一个方法的返回值，想用那个用那个，不用拉到
    var returns = util({
        'loading': [], // // 缓冲 页面 （齿轮）
        'checkLoginStatus': [], //  检查是否用户是否登录  (未登录直接跳到登录页面去)
    });

// 添加课程
    $('form').ajaxForm(function(data){
        location.href = '/html/course/course_add_step1.html?cs_id='+data.result.cs_id ; // 跳转到 第一步
    })

 // 销毁进度条
     nprogress.done();

});