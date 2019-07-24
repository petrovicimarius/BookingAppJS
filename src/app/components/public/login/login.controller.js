export default class loginCtrl {

    constructor($location, $scope, $http, ConnectionService, environment) {
        this.$scope = $scope;
        this.$http = $http;
        this.$location = $location;
        this._service = ConnectionService;
        this._env = environment.environment;
        this.activeRoute = false;
        this.state = 'Login';
        this.message = '';
        this.error = false;
        this.success = false;
        this.showPass = false;
        this.response;
        this.userData = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
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
        var data;
        switch (type) {
            case 'Login':
                console.log('Login: ', _this.userData);
                data = {
                    email: _this.userData.email,
                    password: _this.userData.password
                }
                _this._service.post(`${_this._env.base}${_this._env.login}`, data).then(res => {
                    console.log('login res', res);
                }, err => {
                    console.error("ERROR on login: ", err);
                    _this.error = true;
                    _this.message = 'login';
                });
                if (_this.userData.email == _this.user.email && _this.userData.password == _this.user.password) {
                    console.log('User true!');
                    _this.$location.path('/offices')
                }
                break;
            case 'Register':
                console.log('Register: ', _this.userData);
                _this.message = 'register';
                data = {
                    first_name: _this.userData.first_name,
                    last_name: _this.userData.last_name,
                    email: _this.userData.email,
                    password: _this.userData.password
                }
                _this._service.post(`${_this._env.base}${_this._env.register}`, data).then(res => {
                    console.log('login res', res);
                    _this.success = true;
                }, err => {
                    console.error("ERROR on register: ", err);
                    _this.error = true;
                });
                break;
            case 'Reset':
                console.log('Reset: ', _this.userData);
                _this.message = 'reset';
                data = {
                    email: _this.userData.email
                }
                _this._service.post(`${_this._env.base}${_this._env.reset}`, data).then(res => {
                    console.log('login res', res);
                    _this.success = true;
                }, err => {
                    console.error("ERROR on register: ", err);
                    _this.error = true;
                });
                break;

            default:
                break;
        }
    }
}