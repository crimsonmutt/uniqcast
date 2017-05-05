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
var ChannelListComponent = (function () {
    function ChannelListComponent(serverService) {
        this.serverService = serverService;
        this.channelList = [];
        this.packetList = [];
        this.loading = true;
        this.localState = 0;
        this.candidate = {
            id: "",
            name: "",
            url: "",
            package: 0
        };
        this.stateChange = new core_1.EventEmitter();
        this.fill();
    }
    ChannelListComponent.prototype.wipeCandidate = function () {
        this.candidate = {
            id: "",
            name: "",
            url: "",
            package: 0
        };
    };
    ChannelListComponent.prototype.fill = function () {
        var _this = this;
        this.serverService.getData(1)
            .subscribe(function (response) {
            _this.loading = false;
            _this.channelList = response;
        }, function (e) {
            _this.loading = false;
            console.log(e);
        });
        this.serverService.getData(0)
            .subscribe(function (response) {
            _this.loading = false;
            _this.packetList = response;
        }, function (e) {
            _this.loading = false;
            console.log(e);
        });
    };
    ChannelListComponent.prototype.addChannel = function () {
        var _this = this;
        this.loading = true;
        var obj;
        this.candidate.package == 0 ?
            obj = { name: this.candidate.name, url: this.candidate.url, package: {} }
            : obj = { name: this.candidate.name, url: this.candidate.url, package: this.packetList[this.candidate.package - 1] };
        console.log(obj);
        this.serverService.addData(1, obj)
            .subscribe(function (response) {
            _this.fill();
            _this.wipeCandidate();
        }, function (e) {
            _this.fill();
            _this.wipeCandidate();
            console.log(e);
        });
    };
    ChannelListComponent.prototype.editChannel = function () {
        var _this = this;
        this.loading = true;
        var obj;
        this.candidate.package == 0 ?
            obj = { name: this.candidate.name, url: this.candidate.url, package: {} }
            : obj = { name: this.candidate.name, url: this.candidate.url, package: this.packetList[this.candidate.package - 1] };
        this.serverService.editData(1, obj, this.candidate.id)
            .subscribe(function (response) {
            _this.fill();
            _this.wipeCandidate();
        }, function (e) {
            _this.fill();
            _this.wipeCandidate();
            console.log(e);
        });
    };
    ChannelListComponent.prototype.deleteChannel = function () {
        var _this = this;
        this.loading = true;
        var obj;
        this.candidate.package == 0 ?
            obj = { name: this.candidate.name, url: this.candidate.url, package: {} }
            : obj = { name: this.candidate.name, url: this.candidate.url, package: this.packetList[this.candidate.package - 1] };
        this.serverService.deleteData(1, obj, this.candidate.id)
            .subscribe(function (response) {
            _this.fill();
            _this.wipeCandidate();
        }, function (e) {
            _this.fill();
            _this.wipeCandidate();
            console.log(e);
        });
    };
    ChannelListComponent.prototype.logging = function () {
        console.log(JSON.stringify(this.candidate));
    };
    ChannelListComponent.prototype.setPackage = function (p) {
        var _this = this;
        if (p == undefined) {
            this.candidate.package = 0;
            return;
        }
        this.packetList.forEach(function (item, index) {
            if (p.id == item.id) {
                _this.candidate.package = index + 1;
                return;
            }
        });
    };
    return ChannelListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChannelListComponent.prototype, "stateChange", void 0);
ChannelListComponent = __decorate([
    core_1.Component({
        selector: 'channellist',
        templateUrl: './app/channellist.template.html'
    }),
    __metadata("design:paramtypes", [server_service_1.ServerService])
], ChannelListComponent);
exports.ChannelListComponent = ChannelListComponent;
//# sourceMappingURL=channellist.component.js.map