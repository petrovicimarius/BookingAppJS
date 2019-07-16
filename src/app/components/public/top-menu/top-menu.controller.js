export default class TopMenu {

    constructor($location, $scope, $http, ConnectionService) {
        this.$scope = $scope;
        this.$http = $http;
        this.$location = $location;
        this._service = ConnectionService;
        this.admin = false;
        this.activeRoute = '';
    }

    $onInit() {
        var _this = this;
        _this.activeRoute = this.$location.path();
    }

    checkRoute(route) {
        var _this = this;
        switch (route) {
            case '/companies':
                _this.activeRoute = route;
                break;
            case '/login':
                _this.activeRoute = route;
                break;
            case '/offices':
                _this.activeRoute = route;
                break;
            case '/services':
                _this.activeRoute = route;
                break;
            case '/bookings':
                _this.activeRoute = route;
                break;
            case '/profile':
                _this.activeRoute = route;
                break;
            default:
                break;
        }
    }
}