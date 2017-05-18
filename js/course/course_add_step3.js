define([
    'jquery',
    'header',
    'aside',
    'jquery_form',
    'nprogress',
    'util',
    'template',
    'bootstrap',
], function ($, ud, ud, ud, nprogress, util,template,ud) {

    // util返回每一个方法的返回值，想用那个用那个，不用拉到
    var returns = util({
        'loading': [], // // 缓冲 页面 （齿轮）
        'checkLoginStatus': [], //  检查是否用户是否登录  (未登录直接跳到登录页面去)
        'getSearch' : ['cs_id'],
    });
// 课时管理的列表 数据回显
    var csId = returns.getSearch;
    $.get('/v6/course/lesson' ,{cs_id:csId} ,function(data){
        $('.steps').html(template( 'cs-step3-tpl' ,data.result));
        
    });

// 点击  +课时 和 编辑  按钮  获取数据 渲染 到bootstrap模态框上面
   $(document).on('click','.btn-add,.btn-edit',function(){
       var  ct_id = $(this).attr('data-ct-id') // 获取自定义属性 得到该课时对应的id
    //    然后 编辑 该课时 事件
       if(ct_id){
           // 把主题页面的课时列表 中的 某一个课时的相关信息 展示到 模态框上面
           $.get('/v6/course/chapter/edit',{ct_id:csId} ,function(data){
            //    给数据添加action  模板中直接获取data.result.action 调用
        data.result.action = '/v6/course/chapter/modify';
              $('#chapterModal').html(template('cs-edit-add-tpl',data.result));
           });
       }else{
        //    直接回显 没有数据  因为是添加课时 不需要获取数据 
                 //    给数据添加action  模板中直接获取data.result.action 调用
            $('#chapterModal').html(template('cs-edit-add-tpl',{action : '/v6/course/chapter/add'}));
       }
   });

//    bootstrap模态框 内部的数据  的提交到页面列表 
    // 编辑或添加课时内容后 点击添加按钮(需注意按钮不在表单form内) 
    // 数据提交到 主页面的 课时列表 内 页面刷新 

    $(document).on( 'click' , '#btn-submit', function(){
        // this为添加按钮 所以form通过id名来获取
        $('#add-edit').ajaxSubmit({
            data : {
            // 编辑时  通过编辑的自定义属性来获取当前编辑的是哪一个课时
            ct_id : $(this).attr('data-ct-id'),//课时id
                 // 通过页面路径？后面来获取的 页面是哪一个课程
            ct_cs_id :csId ,  //当前页面是当前 课程id 
            // 通过对免费课时的按钮的prop方法来确定是否被选中 中1 无0
            // checked是否被选中 ct_is_free 需要手动转化成1/0
            ct_is_free : $('#ct_is_free').prop('checked')? 1:0
            // .prop('checked')获取满足添加的元素集合的属性checked的值 
        },
        success : function(){
            // 数据提交后 刷新页面
            location.reload();
        }
        })
    })



// 销毁进度条

        nprogress.done();

});