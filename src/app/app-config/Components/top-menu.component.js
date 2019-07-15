angular.module('BookingApp', ['angular.css.injector']).component('topMenu', {
    template: 'Hello',
    controller: function TopMenuSCSS(cssInjector) {
        cssInjector.add("./../style/top-menu.config.scss");
        console.log('Component works!');
    }
});