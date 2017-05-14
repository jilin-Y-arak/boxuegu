define([
    'jquery',
    'jquery_cookie'
], function ($, ud) {

    //方法1  封装的各个方法 
    //    return{
    //         // 对于其他页面的登录状态的检查 如果未登录直接跳转 登录页面
    //         checkLoginStatus : function(){
    //             if( !$.cookie('PHPSESSID')){
    //                 location.href = '/html/home/login.html' ;              
    //                 // location.href = 'login' ; // 也行！
    //             }
    //         },
    //         // 启用 页面的ajax请求 loading 效果
    //         loading : function(){
    //             $(document).on('ajaxStart' , function(){
    //                 $('.ovarlay').show();
    //             })
    //             .on('ajaxStop' , function(){
    //                 $('.overlay').hide() ;
    //             })
    //         },
    //  }

    //方法2 更全面 封装的各个方法  
    // 1. 声明一个变量 为对象 里面存储各个方法
    var util = {
            // 对于其他页面的登录状态的检查 如果未登录直接跳转 登录页面
            checkLoginStatus : function(){
                if( !$.cookie('PHPSESSID')){
                    location.href = '/html/home/login.html' ;              
                    // location.href = 'login' ; // 也行！
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
    // 返回 一个函数 
    // 函数 传入 每个方法的名称 键方法名 ：值-方法需要的传入的参数
    //  格式为{'checkLoginStatus':[],loading' : [] }
    return function(methods){ 
        // 该对象 用来接收 每个方法的返回值
        var returns = {};
        // 遍历要执行的方法 key为具体的方法名 
        for(var key in methods){
            // 使用同样的方法名 存储方法的返回值
            // returns存方法的对象 key方法名  returns[key]其方法对应的返回值
            // util[key]对象的方法的值 即方法对应的函数   
            // apply(对象 ， 方法名集合对象的具体方法名的参数 ) 
            // 用apply方法 将每个具体的方法名的参数数组依次传给 方法对应的值 即对应的函数
            returns[key] = util[key].apply(util , methods[key]);
        }
        // 返回 所有方法的 返回值
        return returns ;

    }







});