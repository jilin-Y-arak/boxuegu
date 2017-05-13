// 所有页面的公用的入口模块  对所模块进行paths路径别名的配置
require.config({
    // 配置根目录
    baseUrl : '/' ,
    // 配置路径别名 方便日后 调用
    paths : {
        // 每个页面对应的模块
        // home 的js
        index : 'js/home/index' ,
        login : 'js/home/login' ,
        repass : 'js/home/repass' ,
        settings : 'js/home/settings' ,
        // teacher 
        tcEdit : 'js/teacher/edit' ,
        tcList : 'js/teacher/list' ,
        // user
        usProfile : 'js/user/profile' ,
        usList : 'js/user/list' ,
        // course
        csAdd : 'js/course/add' ,
        csList : 'js/course/list' ,
        cgAdd : 'js/course/category_add' ,
        cgList : 'js/course/category_list' ,
        csAdd1 : 'js/course/course_add_step1' ,
        csAdd2 : 'js/course/course_add_step2' ,
        csAdd3 : 'js/course/course_add_step3' ,

        // 公共的模块
        aside : 'js/common/aside' ,
        header : 'js/common/header' ,
        util : 'js/common/util' ,
        
        // 第三方模块
        // 依赖jQuery 
        jquery : 'lib/jquery/jquery.min' ,
        bootstrap : 'lib/bootstrap/js/bootstrap.min',
        jquery_form:'lib/jquery-form/jquery.form' ,
        jquery_cookie:'lib/jquery-cookie/jquery.cookie' ,
        
        // 独立的
        nprogress:'lib/nprogress/nprogress' ,
          
    },
    // 配置普通模块的依赖 或 输出
    shim : {
        // bootstrap 是普通模块 且依赖jquery
        bootstrap : {
            // 且依赖jquery
            deps : ['jquery']
        }
    }
});
/**
 * 如果用户打开的是某个页面，那么应该加载对应的js模块 
 */
var obj = {
    '/' : 'index' ,
    '/html/home/login.html' : 'login' ,
    '/html/home/repass.html': 'repass',
	'/html/home/settings.html': 'settings',
	'/html/teacher/edit.html': 'tcEdit',
	'/html/teacher/list.html': 'tcList',
	'/html/user/profile.html': 'usProfile',
	'/html/user/list.html': 'usList',
	'/html/course/add.html': 'csAdd',
	'/html/course/list.html': 'usList',
	'/html/course/category_add.html': 'cgAdd',
	'/html/course/category_list.html': 'cgList',
	'/html/course/course_add_step1.html': 'csAdd1',
	'/html/course/course_add_step2.html': 'csAdd2',
	'/html/course/course_add_step3.html': 'csAdd3'
};
// 通过对象 获取对象中的属性   即浏览器的路径名称 
 var moduleName = obj[location.pathname] ;
//   加载对应 的模块  ( 加载 路径的 值 即别名  )
 require([moduleName]) ;