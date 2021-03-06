"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login.component");
var packetlist_component_1 = require("./packetlist.component");
var channellist_component_1 = require("./channellist.component");
var http_1 = require("@angular/http");
var server_service_1 = require("./server.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        id: 'RootModule',
        imports: [http_1.HttpModule, platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, packetlist_component_1.PacketListComponent, channellist_component_1.ChannelListComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [server_service_1.ServerService, forms_1.FormBuilder],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map