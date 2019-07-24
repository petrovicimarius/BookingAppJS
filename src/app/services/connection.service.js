const httpOptions = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "x-access-token": localStorage.getItem("token") ?
        localStorage.getItem("token") : ""
};

export default class ConnectionService {

    constructor($http) {
        this.$http = $http;
    }

    get(path) {
        var _this = this;
        return _this.$http.get(path, httpOptions);
    }
}