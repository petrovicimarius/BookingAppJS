export default class officesCtrl {

    constructor($location, ConnectionService, environment) {
        this.$location = $location;
        this._env = environment.environment;
        this._service = ConnectionService;
        this.officesList = [];
        this.officeId;
    }

    $onInit() {
        var _this = this;
        _this.officeId = _this.$location.path().split('/offices/');
        _this._service.get(`${_this._env.base}${_this._env.offices}${_this.officeId[1]}`).then(res => {
            _this.officesList = res.data.offices;
            console.log('offices: ', _this.officesList);
        }, err => {
            console.error(err);
        });
    }

    goToServices(id) {
        var _this = this;
        _this.$location.path('/services/' + id);
    }
}