/**
 * 路由 懒加载 配置文件 
 */
import app from '@/app/app-main'
import companiesCtrl from './components/admin/companies/companies.controller';
import officesCtrl from './components/admin/offices/offices.controller';

app.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
    // lazy controller, directive and service 
    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service = $provide.service;
    app.constant = $provide.constant;
    app.value = $provide.value;
}]);
/**
 * 懒加载配置 示例
// 懒加载 template  代替 template 

templateProvider: function() {
    return new Promise((resolve)=>{
        require.ensure([], function(require) {
            var template = require('@/app/templates/app-html.html');
            resolve(template);
        });
    })
},
resolve: {
    devs: ['$ocLazyLoad', function ($ocLazyLoad) {
        return new Promise(function(resolve, reject){
            require.ensure([], function () {
                //如有其他 文件需要 加载 可以在此引入 并加入到 injection数组中,或在响应模块文件中引入; 
                // require() 路径已@/ 在app下续写
                let module_import = require('@/app/module/blog/module-import.js');
                let injection = [module_import]
                $ocLazyLoad.inject(injection)
                resolve(injection);
            });
        })
    }]
}
 */
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/companies', {
            url: '/companies',
            template: require('@/app/components/admin/companies/companies.html'),
            controller: companiesCtrl,
            controllerAs: '$companies',
            css: require('@/app/components/admin/companies/companies.css'),
        });
    $stateProvider
        .state('/offices', {
            url: '/offices',
            template: require('@/app/components/admin/offices/offices.html'),
            controller: officesCtrl,
            controllerAs: '$offices',
            css: require('@/app/components/admin/offices/offices.css'),
        })
}])