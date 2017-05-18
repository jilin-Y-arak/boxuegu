define([
    'jquery',
    'header',
    'aside',
    'jquery_cookie',
    'nprogress',
    'util',
    'jquery_form',
    'jquery_region',
    'template',
    'datepicker',
    'datepicker_zh_CN',
    'uploadify'

], function ($, ud, ud, ud, nprogress, util, ud, ud, template, datepicker, ud ,uploadify) {

    // util返回每一个方法的返回值，想用那个用那个，不用拉到
    var returns = util({
        'loading': [], // // 缓冲 页面 （齿轮）
        'checkLoginStatus': [], //  检查是否用户是否登录  (未登录直接跳到登录页面去)
    });
    /**
     * 个人中心详细信息回显 - 表单提交转ajax(省市区三联动) 
     * ( 因为个人向下信息是动态添加的所以渲染完毕后才能获取到)
     * 1、请求接口 渲染模版
     * 表单提交转ajax
     * (省市区三联动)
     * */
    $.get('/v6/teacher/profile', function (data) {
        $('.teacher-profile').html(template('tc-settings-tpl', data.result));
        profileSubmit();
        initPCD();
        initDatepicker();
        initUploadify();


    })
    // 表单ajax提交事件
    function profileSubmit() {
        $('.teacher-profile form').on('submit', function (e) {
            e.preventDefault(); // 阻止表单默认提交行为 
            $(this).ajaxSubmit({
                data: {
                    tc_hometown: $('#p').find(':selected').text() + '|' + $('#c').find(':selected').text() + '|' + $('#d').find(':selected').text(),
                    tc_province: $('#p').val(),
                    tc_city: $('#c').val(),
                    tc_district: $('#d').val()
                },
                success: function () {
                    location.reload(); //保存后 页面刷新
                }
            });
        })
    }

    //插件 省市区三联动
    function initPCD() {
        $('#tc-region').region({
            url: '/lib/jquery-region/region.json'
        })
    }

    // 日期插件 函数
    function initDatepicker() {
        // 插件的 规定用法格式 (内部配置 自由选择)
        $('input[name="tc_join_date"]').datepicker({
            language: 'zh-CN',//中文 需要引入对应的语言包js 
            format: 'yy-mm-dd',
            startDate: new Date('1950-01-01'),
			endDate: new Date('1999-01-01')
        });
         $('input[name="tc_birthday"]').datepicker({
            language: 'zh-CN',
            format: 'yy-mm-dd',
            startDate: new Date('2009-01-01'),
			endDate: new Date()
        });
    }

    // 文件上传 （ 这里用于 头像上传）
    function initUploadify(){
        $('#upfile').uploadify({
        swf: '/lib/uploadify/uploadify.swf', // flash选取文件的脚本
        uploader: '/v6/uploader/avatar',//接口
        fileObjName :'tc_avatar' ,
        // 设置提交给后端文件数据对应的key 类似表单中的name
        fileTypeExts: '*.gif; *.jpg; *.png' ,
        buttonText:"" ,//设置按钮文本
        height:$('.preview').height() , //设置高度
        buttonText:"" ,//设置按钮文本
        // 文件上传成功的回调 
        // 回调接收的第一个参数为文件对象，第二个参数为请求回来的数据
        onUploadSuccess : function(file , data){
            try{
                // 这里的data为字符串 需要手动解析成对象
                $('#avatar').attr('src' , JSON.parse(data).result.path)
                // data.result.path 文档规定
            }catch(e){
                console.log(data);
            }
        }
    });
}

    // 销毁进度条
    $(function () {
        nprogress.done();
    })
});