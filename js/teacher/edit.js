define([
    'jquery',
    'header',
    'aside',
    'jquery_form',
    'nprogress',
    'util',
    'template'
], function($, ud ,ud ,ud  ,nprogress ,util ,template) {

// 封装方法 1 的调用模式 （废弃）
    // // 缓冲 页面 （齿轮）
    // util.loading();
    // // 调用util的方法 检查是否用户是否登录  (未登录直接跳到登录页面去)
    // util.checkLoginStatus();  


// 封装方法 2  的调用模式
//  util返回每一个方法的返回值，想用那个用那个，不用拉到
    var returns = util({
        'checkLoginStatus' : [] ,
        'loading' : [],
        'getSearch' : ['tc_id'] // 调用方法获取所对应的tc-id

    });
    var tcId = returns.getSearch ; //得到tc-id的 值 
    // console.log(tcId)

    // 通过tc_id :tcID获取 当前讲师
    //  请求该讲师当前的数据 回显  再 修改 在提交到讲师列表页
    
    $.get('/v6/teacher/edit' , {tc_id :tcId }, function(data){
        // 通过模态框 获取需要回显 的数据
        // console.log(data)
        $('.teacher-add').append(template('tc-edit-tpl' , data.result)) ;
        // 修改讲师信息 成功后调转 讲师列表页
        $('.teacher-add form').ajaxForm({
            data : {tc_id : tcId} ,
            success : function(){
                location.href  = '/html/teacher/list.html';
            }
        })
    });



 // 销毁页面上部的进度条 结束
    $(function(){
        nprogress.done();
    })
});