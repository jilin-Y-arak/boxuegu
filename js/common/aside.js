define([
    'jquery',
    'jquery_cookie'
], function($, ud) {
    /**
     * 取出cookie 存储的用户信息
     * 存储的信息为JSON字符串 需JSON.parse 解析为js对象
     * 数据渲染到 导航栏左侧 上部
     */
    
    // var userInfo ={};
    // try {
    //     userInfo = JSON.parse($.cookie('userInfo')) ;
    // }catch(e){
    //     console.log("userInfo解析错误") ;
    // }

    var userInfo = JSON.parse($.cookie('userInfo') || '{}');
    // 在保证存在 头像 的请求 才设置用户头像
    userInfo.tc_avatar && $('.aside .avatar img').attr('src' , userInfo.tc_avatar) ;
    // 设置用户姓名
    $('.aside h4').text(userInfo.tc_name) ;

    // 左侧下拉列表
    $('.slide-down').on('click' , function(){
        // 下拉列表 slideToggle下拉上拉自动切换 
        $(this).next().slideToggle();
    })
   
    /**
	 * 左侧导航焦点定位：
	 * 1、先获取页面的pathname
	 * 2、定义一个对象，这个对象存储pathname与左侧导航对应的href属性值
	 * 3、然后我们使用页面的pathname去对象中匹配，
	 * 匹配到了就使用这个匹配到的值获取对应的a添加active_Class设置焦点，
	 * 如果没有匹配到，就直接使用该pathname获取对应a添加active_Class设置焦点。
	 * */
    // 获取 路径名
     var pathname = location.pathname ;
    //  这两个不是对应一样的 所以 配置处理
     var pathToHref = {
        //  当页面的路径pathName 为   :   a链接的 href 转到     
         '/html/user/profile.html' : '/html/user/list.html',
         '/html/teacher/edit.html' : '/html/teacher/list.html',

     };
    //  变量href
    //   先判断pathToHref里面有pathName属性对应的[值]，就用，没有 就用pathName 
    //   把他 赋值给 href
     var href = pathToHref[pathname]? pathToHref[pathname] : pathname;
    //  对所有的 清除active类名 不被选中  当他的href为变量href对应的值时  添加类名 即 被选中
     $('.aside a').removeClass('active')
        .filter('[href="'+href+'"]').addClass('active').parent().parent().css('display' , 'block')

    

});




