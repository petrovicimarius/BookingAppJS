export default class ConnectionService {

    constructor($http) {
        this.$http = $http;
    }

    getRequest(path) {
        return this.$http.get(path);
    }
}