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
var PacketListComponent = (function () {
    function PacketListComponent(serverService) {
        this.serverService = serverService;
        this.packetList = [];
        this.loading = true;
        this.localState = 0;
        this.candidate = {
            id: "",
            name: "",
            quota: ""
        };
        this.stateChange = new core_1.EventEmitter();
        this.fill();
    }
    PacketListComponent.prototype.fill = function () {
        var _this = this;
        this.serverService.getData(0)
            .subscribe(function (response) {
            _this.loading = false;
            _this.packetList = response;
        }, function (e) {
            _this.loading = false;
            console.log(e);
        });
    };
    PacketListComponent.prototype.wipeCandidate = function () { this.candidate = { id: '', name: '', quota: '' }; };
    PacketListComponent.prototype.addPacket = function () {
        var _this = this;
        this.loading = true;
        var obj = { name: this.candidate.name, quota: this.candidate.quota };
        this.serverService.addData(0, obj)
            .subscribe(function (response) {
            _this.fill();
            _this.wipeCandidate();
        }, function (e) {
            _this.fill();
            _this.wipeCandidate();
            console.log(e);
        });
    };
    PacketListComponent.prototype.editPacket = function () {
        var _this = this;
        this.loading = true;
        var obj = { name: this.candidate.name, quota: this.candidate.quota };
        this.serverService.editData(0, obj, this.candidate.id)
            .subscribe(function (response) {
            _this.fill();
            _this.wipeCandidate();
        }, function (e) {
            _this.fill();
            _this.wipeCandidate();
            console.log(e);
        });
    };
    PacketListComponent.prototype.deletePacket = function () {
        var _this = this;
        this.loading = true;
        var obj = { name: this.candidate.name, quota: this.candidate.quota };
        this.serverService.deleteData(0, obj, this.candidate.id)
            .subscribe(function (response) {
            _this.fill();
            _this.wipeCandidate();
        }, function (e) {
            _this.fill();
            _this.wipeCandidate();
            console.log(e);
        });
    };
    return PacketListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PacketListComponent.prototype, "stateChange", void 0);
PacketListComponent = __decorate([
    core_1.Component({
        selector: 'packetlist',
        templateUrl: './app/packetlist.template.html'
    }),
    __metadata("design:paramtypes", [server_service_1.ServerService])
], PacketListComponent);
exports.PacketListComponent = PacketListComponent;
//# sourceMappingURL=packetlist.component.js.map