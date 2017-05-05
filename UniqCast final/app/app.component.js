"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.state = 0;
    }
    AppComponent.prototype.stateChange = function (e) {
        this.state = e;
        if (e == 0) {
            Token.jwt = "";
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <login (stateChange)=stateChange($event) *ngIf=\"state == 0\"></login>\n    <packetlist (stateChange)=stateChange($event) *ngIf=\"state == 1\"></packetlist>\n    <channellist (stateChange)=stateChange($event) *ngIf=\"state == 2\"></channellist>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Token = (function () {
    function Token() {
    }
    return Token;
}());
Token.jwt = "";
exports.Token = Token;
//# sourceMappingURL=app.component.js.map