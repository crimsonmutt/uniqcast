"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var app_component_1 = require("./app.component");
var ServerService = (function () {
    function ServerService(_http) {
        this._http = _http;
    }
    ServerService.prototype.login = function (obj) {
        var url = "http://176.31.182.158:3001/auth/local";
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, });
        return this._http.post(url, obj, options)
            .map(function (res) { return res.json(); })
            .catch(function (e) { return Observable_1.Observable.throw(e.status); });
    };
    ServerService.prototype.getData = function (s) {
        var url;
        s == 0 ? url = "http://176.31.182.158:3001/packages" : url = "http://176.31.182.158:3001/channels";
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', Authorization: "Bearer " + app_component_1.Token.jwt });
        var options = new http_1.RequestOptions({ headers: headers, });
        return this._http.get(url, options)
            .map(function (res) { return res.json(); })
            .catch(function (e) { return Observable_1.Observable.throw(e.status); });
    };
    ServerService.prototype.addData = function (s, obj) {
        var url;
        s == 0 ? url = "http://176.31.182.158:3001/packages" : url = "http://176.31.182.158:3001/channels";
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', Authorization: "Bearer " + app_component_1.Token.jwt });
        var options = new http_1.RequestOptions({ headers: headers, });
        return this._http.post(url, obj, options)
            .map(function (res) { return res.json(); })
            .catch(function (e) { return Observable_1.Observable.throw(e.status); });
    };
    ServerService.prototype.editData = function (s, obj, id) {
        var url;
        s == 0 ? url = "http://176.31.182.158:3001/packages/" + id : url = "http://176.31.182.158:3001/channels/" + id;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', Authorization: "Bearer " + app_component_1.Token.jwt });
        var options = new http_1.RequestOptions({ headers: headers, });
        return this._http.put(url, obj, options)
            .map(function (res) { return res.json(); })
            .catch(function (e) { return Observable_1.Observable.throw(e.status); });
    };
    ServerService.prototype.deleteData = function (s, obj, id) {
        var url;
        s == 0 ? url = "http://176.31.182.158:3001/packages/" + id : url = "http://176.31.182.158:3001/channels/" + id;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', Authorization: "Bearer " + app_component_1.Token.jwt });
        var options = new http_1.RequestOptions({ headers: headers, });
        return this._http.delete(url, options)
            .map(function (res) { return res.json(); })
            .catch(function (e) { return Observable_1.Observable.throw(e.status); });
    };
    return ServerService;
}());
ServerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ServerService);
exports.ServerService = ServerService;
//# sourceMappingURL=server.service.js.map