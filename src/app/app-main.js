import angular from 'angular'
import oclazyload from 'oclazyload/dist/ocLazyLoad.min';
import uiRouter from 'angular-ui-router/release/angular-ui-router.min.js';


export default angular.module('BookingApp', [oclazyload, uiRouter])
    .component('topMenu', {
        template: require('./templates/top-menu.html'),
        controller: function TopMenuSCSS() {
            console.log('Component works!');
        },
        css: require('./style/top-menu.config.css')
    });