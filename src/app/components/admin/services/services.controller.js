export default class servicesCtrl {

    constructor($location, ConnectionService, environment) {
        this.$location = $location;
        this._service = ConnectionService;
        this._env = environment.environment;
        this.serviceId;
        this.servicesList = [];
        this.officesList = [];
        this.bookEnabled = false;
        this.sendEnabled = false;
    }

    $onInit() {
        var _this = this;
        _this.serviceId = _this.$location.path().split('/services/');
        _this._service.get(`${_this._env.base}${_this._env.services}${_this.serviceId[1]}`).then(res => {
            _this.servicesList = res.data.services;
            console.log('services: ', _this.servicesList);
            _this._service.get(`${_this._env.base}${_this._env.offices}${_this.servicesList[0].office_id}`).then(res => {
                _this.officesList = res.data.offices;
                console.log(res);

            });
            console.log('offices: ', _this.officesList);
        }, err => {
            console.error(err);
        });
    }
}