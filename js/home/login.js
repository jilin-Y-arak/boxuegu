/**
 * jquery ADM模块 正常接收对外暴露的方法
 *  bootstarp 普通模块 没有对外暴露全局变量 接收到的值为undefined (ud)
 * jquery-form ADM模块 没有对外暴露全局变量 接收到的值为undefined (ud)
 * jquery-cookie ADM模块 没有对外暴露全局变量 接收到的值为undefined (ud)
 * nprogress ADM模块  
 * util ADM 模块 
 */
define([ 'jquery','bootstrap', 'jquery_form','jquery_cookie' ,'nprogress' ,'util'], function($, ud ,ud , ud , nprogress, util) { 
    // 形参用来接收模块的输出 可任意写名 但是 需按顺序

    // 网站进度条 即网页最上面的进度条
    nprogress.start() ;
    $(function(){
        nprogress.done() ;
    });

// 配合ajax请求的 loading 进入页面的缓冲画面 （齿轮）
    util.loading(); 

    // 监听form表单提交时间 转为ajax请求
    // ajaxFor 是jquery-form的方法 可以直接使用 
    // 表单提交的的ajax请求
    $('#login-form').ajaxForm({
        // 登录成功后 服务器 返回用户信息 
        success : function (data) {  
            // 把信息存到cookie 供其他页面使用
            $.cookie('userInfo' ,JSON.stringify(data.result),{path:'/'} )
            // 请求成功后 跳转到 首页
            location.href = '/';
        },
        error : function () { 
            console.log('登入失败，请重试');
         }
    });   
    
    // 登录 状态 的检查  登录成功 直接跳转 到首页
    if($.cookie('PHPSESSID')){
        location.href = '/'
    }

});

