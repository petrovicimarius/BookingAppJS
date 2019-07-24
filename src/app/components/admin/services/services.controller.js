export default class servicesCtrl {



    constructor($scope, $location, Booking, ConnectionService, environment) {
        this.$scope = $scope;
        this.$location = $location;
        this._service = ConnectionService;
        this._env = environment.environment;
        this.newBooking = Booking;
        this.today = new Date();
        // this.today = $filter("date")(Date.now(), 'MM-dd-yyyy');
        this.serviceId;
        this.servicesList = [];
        this.office;
        this.selectedService;
        this.bookEnabled = false;
        this.sendEnabled = false;
        this.booking = {
            first_name: '',
            last_name: '',
            phone: '',
            email: '',
            address: '',
            date: '',
        }
    }



    $onInit() {
        var _this = this;
        _this.serviceId = _this.$location.path().split('/services/');
        _this._service.get(`${_this._env.base}${_this._env.office}${_this.serviceId[1]}`).then(res => {
            _this.office = res.data.office;
            _this.servicesList = res.data.office.services;
            console.log('offices: ', _this.office, _this.servicesList);

        });
        console.log('date: ', _this.today, _this.newBooking);

    }

    toggleBook(service) {
        var _this = this;
        console.log('book: ', service);
        _this.selectedService = service;
        _this.bookEnabled = true;
    }

    toggleUndo() {
        var _this = this;
        _this.bookEnabled = false;
        _this.sendEnabled = false;
    }

    sendBooking() {
        var _this = this;
        console.log('info: ', _this.booking);
        this.bookEnabled = false;
        this.sendEnabled = true;
        this.booking = _this.newBooking;
    }
}