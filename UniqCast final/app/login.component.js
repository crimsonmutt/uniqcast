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
var core_1 = require("@angular/core");
var server_service_1 = require("./server.service");
var app_component_1 = require("./app.component");
var LoginComponent = (function () {
    function LoginComponent(serverService) {
        this.serverService = serverService;
        this.credentials = { identifier: "uniqcaster", password: "cast457" };
        this.loginFail = false;
        this.loginPending = false;
        this.stateChange = new core_1.EventEmitter();
    }
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        this.loginPending = true;
        this.serverService.login(this.credentials)
            .subscribe(function (response) {
            _this.loginPending = false;
            _this.loginFail = false;
            _this.credentials.password = "";
            _this.stateChange.emit(1);
            app_component_1.Token.jwt = response.jwt;
        }, function (e) {
            _this.loginPending = false;
            _this.loginFail = true;
            _this.credentials.password = "";
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "stateChange", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './app/login.template.html'
    }),
    __metadata("design:paramtypes", [server_service_1.ServerService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map