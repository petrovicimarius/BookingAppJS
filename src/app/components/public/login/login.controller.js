export default class loginCtrl {

    constructor($location, $scope, $http, ConnectionService) {
        this.$scope = $scope;
        this.$http = $http;
        this.$location = $location;
        this._service = ConnectionService;
        this.activeRoute = false;
    }

    $onInit() {
        var _this = this;
        // console.log('Login works!', this.$location.path());
        if (this.$location = '/login') {
            _this.activeRoute = true;
        }

        // console.log(_this.activeRoute);
    }
}