define([
    'jquery',
    'bootstrap',
    'header',
    'aside',
    'jquery_cookie',
    'nprogress',
    'util',
    'template'
], function($, ud , ud ,ud ,ud  ,nprogress ,util ,template) {

// util返回每一个方法的返回值，想用那个用那个，不用拉到
    var returns = util({
        'loading' : [] , // // 缓冲 页面 （齿轮）
        'checkLoginStatus' : [], //  检查是否用户是否登录  (未登录直接跳到登录页面去)
    }) ;


    // 对tc_birthday进行复杂的业务逻辑 处理
    template.helper('age' , function(tplValue){  // 形参  $value.tc_birthday
        // 如果没有传入 返回 空字符串 没有传参数年龄一栏为空
        if( !tplValue){
            return '' ;
        }
        // 现在的年份 new Date().getFullYear() 
        var nowYear = new Date().getFullYear() ;
        // 出生年份  模板的 $value.tc_birthday 的年月日截取前面四位作为年份
        var birYear = tplValue.slice(0,4)

        // 返回 现在年份-出生年份 作为年龄的值
        return nowYear - birYear ;

    })
 // 渲染讲师列表到页面上
    $.get('/v6/teacher' ,function(data){
        $('#tc-list-table').append(template('tc-list-tpl' , data))
    });

// 讲师详细信息渲染- 点击查看  -事件委托
    $(document).on('click' , '[href="#teacherModal"]' ,function(){
        var tcId = $(this).attr('data-tc-id') ;
        $.get('/v6/teacher/view',{tc_id : tcId},function(data){
            $('#teacherModal').html(template('tc-modal-tpl' ,data.result))
        });
    });
 
// 注销启用 讲师  事件委托 父亲多用document推荐使用
    $(document).on("click" , '.btn-warning' , function(){
        // 获取自定义属性的值 
        var tcId = $(this).attr('data-tc-id');
        var tcStatus = $(this).attr('data-tc-status');
        var $that = $(this) ; // 因为后面的this直接指向ajax 所以用变量保存 后面用
        
        $.post('/v6/teacher/handle' ,{
            tc_id: tcId ,
            tc_status: tcStatus 
        } ,function(data){
            // 前面已经保存的  $that 就指向 document 
            // 修改 自定义属性data-tc-status 的值 1-0切换
            $that.attr('data-tc-status' , data.result.tc_status)
            // 修改文本 注销启用 切换
            .text(data.result.tc_status==0?'注 销' :'启 用');
        })
    })







    // 销毁进度条
     $(function(){
        nprogress.done();
    })
});