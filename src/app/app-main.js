import angular from 'angular'
import oclazyload from 'oclazyload/dist/ocLazyLoad.min';
import uiRouter from 'angular-ui-router/release/angular-ui-router.min.js';
import ConnectionService from './services/connection.service';
import environment from './../environment';
import TopMenu from './components/public/top-menu/top-menu.controller';

export default angular.module('BookingApp', [oclazyload, uiRouter])
    .component('topMenu', {
        template: require('./components/public/top-menu/top-menu.html'),
        controller: TopMenu,
        controllerAs: '$menu',
        css: require('./components/public/top-menu/top-menu.css')
    })
    .service('ConnectionService', ConnectionService)
    .service('environment', environment);