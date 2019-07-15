export default class TopMenu {

    admin = false;

    constructor($scope, $http, ConnectionService) {
        this.$scope = $scope;
        this.$http = $http;
        this._service = ConnectionService;
    }

    $onInit() {
        console.log('Top menu works!');

    }
}