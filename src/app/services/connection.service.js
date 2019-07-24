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

    post(path, data) {
        var _this = this;
        return _this.$http.post(path, data, httpOptions);
    }

    put(path, data) {
        var _this = this;
        return _this.$http.put(path, data, httpOptions);
    }

    delete(path, data) {
        var _this = this;
        return _this.$http.delete(path, data, httpOptions);
    }
}