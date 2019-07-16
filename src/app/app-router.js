/**
 * 路由 懒加载 配置文件 
 */
import app from '@/app/app-main'
import companiesCtrl from './components/admin/companies/companies.controller';
import officesCtrl from './components/admin/offices/offices.controller';
import loginCtrl from './components/public/login/login.controller';
import servicesCtrl from './components/admin/services/services.controller';
import bookingsCtrl from './components/admin/bookings/bookings.controller';
import profileCtrl from './components/admin/profile/profile.controller';

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
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $routeProvider) {
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
    $stateProvider
        .state('/login', {
            url: '/login',
            template: require('@/app/components/public/login/login.html'),
            controller: loginCtrl,
            controllerAs: '$login',
            css: require('@/app/components/public/login/login.css'),
        })
    $stateProvider
        .state('/services', {
            url: '/services',
            template: require('@/app/components/admin/services/services.html'),
            controller: servicesCtrl,
            controllerAs: '$services',
            css: require('@/app/components/admin/services/services.css'),
        })
    $stateProvider
        .state('/bookings', {
            url: '/bookings',
            template: require('@/app/components/admin/bookings/bookings.html'),
            controller: bookingsCtrl,
            controllerAs: '$bookings',
            css: require('@/app/components/admin/bookings/bookings.css'),
        })
    $stateProvider.state('/profile', {
        url: '/profile',
        template: require('@/app/components/admin/profile/profile.html'),
        controller: profileCtrl,
        controllerAs: '$profile',
        css: require('@/app/components/admin/profile/profile.css'),
    })

}])