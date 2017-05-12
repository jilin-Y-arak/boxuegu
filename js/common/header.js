// 退出事件
define([
    'jquery'    
], function($) {
   $('#logout').on('click' ,function () {
       $.ajax({
           type : 'post' ,
           url : '/v6/logout' ,
           success : function () {  
               location.href = '/html/home/login.html'
           },
           error : function () {
               alert('请求超时，请稍后再试！');
             }
       });
     });
});