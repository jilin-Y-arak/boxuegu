define([
    'jquery',
    'header',
    'aside',
    'jquery_cookie',
    'nprogress',
    'util',
    'jquery_form'
], function ($, ud, ud, ud, nprogress, util ,ud) {

    // util返回每一个方法的返回值，想用那个用那个，不用拉到
    var returns = util({
        'loading': [], // // 缓冲 页面 （齿轮）
        'checkLoginStatus': [], //  检查是否用户是否登录  (未登录直接跳到登录页面去)
    });
// 密码修改
    $('.repass form').on('submit', function (e) {
        e.preventDefault();//阻止默认表单提交
        if($('#newPassword').val()==$('#twoPassword').val()){
            //  根据form表单的数据发送ajax请求 
            $(this).ajaxSubmit(function(){
                // 数据提交后 利用trigger 去自动对 退出按钮 $('#logout') 进行点击'click'
                $('#logout').trigger('click');
            });
        }else{
            alert('两次密码不一致，请重新输入')
        }
        return false ;//阻止默认表单提交
    })

    // 销毁进度条
    nprogress.done();
});