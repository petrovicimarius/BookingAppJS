import {
    log
} from "util";

export default class companiesCtrl {

    constructor($http, $scope, ConnectionService, environment, $location) {
        this.$http = $http;
        this.$scope = $scope;
        this._env = environment.environment;
        this.$location = $location;
        this._service = ConnectionService;
        this.officesList = [];
        this.companiesList = [];
    }

    $onInit() {
        var _this = this;
        _this._service.get(`${_this._env.base}${_this._env.company}`).then(res => {
            _this.companiesList = res.data.companies;
            console.log(res.data.companies);

        }, err => {
            console.error(err);
        });

    }

    goToOffices(id) {
        var _this = this;
        _this.$location.path('/offices/' + id);
    }
}