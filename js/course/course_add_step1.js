define([
    'jquery',
    'header',
    'aside',
    'jquery_form',
    'nprogress',
    'util',
    'template'
], function ($, ud, ud, ud, nprogress, util,template) {

    // util返回每一个方法的返回值，想用那个用那个，不用拉到
    var returns = util({
        'loading': [], // // 缓冲 页面 （齿轮）
        'checkLoginStatus': [], //  检查是否用户是否登录  (未登录直接跳到登录页面去)
        'getSearch' : ['cs_id'],
    });
// 课程信息 数据回显
    var csId = returns.getSearch;
    $.get('/v6/course/basic' ,{cs_id:csId} ,function(data){
        $('.steps').html(template( 'cs-step1-tpl' ,data.result));
        step1Submit();// 表单数据提交
    })

// 课程信息 提交
    function step1Submit(){
        $('form.basic').ajaxForm(function(data){
            location.href = '/html/course/course_add_step2.html?cs_id='+csId
        })
    }
    // 销毁进度条
    $(function () {
        nprogress.done();
    })
});