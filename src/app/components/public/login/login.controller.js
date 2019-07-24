export default class loginCtrl {

    constructor($location, $scope, $http, ConnectionService) {
        this.$scope = $scope;
        this.$http = $http;
        this.$location = $location;
        this._service = ConnectionService;
        this.activeRoute = false;
        this.state = 'Login';
        this.showPass = false;
        this.response;
        this.userData = {
            email: '',
            name: '',
            password: '',
        }
        this.user = {
            email: 'assist@assist.ro',
            password: '123456',
            name: 'Assist'
        }
    }

    $onInit() {}

    changeType(type) {
        var _this = this;
        _this.state = type;
    }

    showMyPass() {
        var _this = this;
        _this.showPass = !_this.showPass;
    }

    login(type) {
        var _this = this;
        switch (type) {
            case 'Login':
                console.log('Register: ', _this.userData);
                if (_this.userData.email == _this.user.email && _this.userData.password == _this.user.password) {
                    console.log('User true!');
                    _this.$location.path('/offices')
                }
                break;
            case 'Register':
                console.log('Register: ', _this.userData);
                _this.$location.path('/services');
                break;
            case 'Reset':
                console.log('Reset: ', _this.userData);
                _this.$location.path('/bookings');
                break;

            default:
                break;
        }
    }
}