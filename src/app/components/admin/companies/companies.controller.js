export default class companiesCtrl {

    constructor($http, $scope, ConnectionService) {
        this.$http = $http;
        this.$scope = $scope;
        this._service = ConnectionService;
    }

    $onInit() {
        console.log('Companies ctrl works!');
    }

    goToOffices(company) {
        console.log('Company: ', company);

    }
}