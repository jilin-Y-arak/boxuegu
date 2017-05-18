define([
    'jquery',
    'header',
    'aside',
    'jquery_form',
    'nprogress',
    'util',
    'template',
    'uploadify',
], function ($, ud, ud, ud, nprogress, util,template,ud) {

    // util返回每一个方法的返回值，想用那个用那个，不用拉到
    var returns = util({
        'loading': [], // // 缓冲 页面 （齿轮）
        'checkLoginStatus': [], //  检查是否用户是否登录  (未登录直接跳到登录页面去)
        'getSearch' : ['cs_id'],
    });
// 课程图片 数据回显
    var csId = returns.getSearch;
    $.get('/v6/course/picture' ,{cs_id:csId} ,function(data){
        $('.steps').html(template( 'cs-step2-tpl' ,data.result));
        
        initUploadify();

    })
// 图片上传

	/**
	 * 初始化图片上传插件
	 * */
	function initUploadify() {
		$('#uploadify').uploadify({
			swf: '/lib/uploadify/uploadify.swf',  // flash选取文件的脚本
			uploader: '/v6/uploader/cover', // 接口
			fileObjName: 'cs_cover_original', // 相当于表单的name属性
			formData: {
				cs_id: csId
			},
			buttonText: '上传图片',
			buttonClass: 'btn btn-success btn-sm btn-uploadify',
			height: 30,
			width: 80,
			itemTemplate: '<i></i>',
			onUploadSuccess: function(file, data) {
				try {
					var data = JSON.parse(data);
					$('.preview img').attr('src', data.result.path);
					$('.thumb img').attr('src', data.result.path);
					location.href = '/html/course/course_add_step3.html?cs_id='+csId ;
				}catch(e){}
			}
		});
	}



    // 销毁进度条

        nprogress.done();

});