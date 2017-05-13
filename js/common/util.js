define([
    'jquery',
    'jquery_cookie',
], function($, ud) {
    // 封装的各个方法
   return{
        // 对于其他页面的登录状态的检查 如果未登录直接跳转 登录页面
        checkLoginStatus : function(){
            if( !$.cookie('PHPSESSID')){
                location.href = '/html/home/login.html' ;
            }
        },
        // 启用 页面的ajax请求 loading 效果
        loading : function(){
            $(document).on('ajaxStart' , function(){
                $('.ovarlay').show();
            })
            .on('ajaxStop' , function(){
                $('.overlay').hide() ;
            })
        },
 }
});
  
   