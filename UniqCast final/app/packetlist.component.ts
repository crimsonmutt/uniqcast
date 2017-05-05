import {Component, EventEmitter, Output} from "@angular/core";
import {ServerService} from "./server.service"

@Component({
    selector: 'packetlist',
    templateUrl: './app/packetlist.template.html'
})
export class PacketListComponent{
    private packetList = [];
    private loading = true;
    private localState = 0;

    private candidate = {
        id: "",
        name: "",
        quota: ""
    }
    @Output() stateChange = new EventEmitter();

    constructor(private serverService: ServerService){
        this.fill();
    }

    fill(){
        this.serverService.getData(0)
            .subscribe(response => {
                this.loading = false;
                this.packetList = response
            }, e => {
                this.loading = false;
                console.log(e);
            });
    }

    wipeCandidate(){this.candidate = {id: '', name: '', quota: ''};}

    addPacket(){
        this.loading = true;
        var obj = {name: this.candidate.name, quota: this.candidate.quota}
        this.serverService.addData(0, obj)
            .subscribe(response => {
                this.fill();
                this.wipeCandidate(); 
            }, e => {
                this.fill();
                this.wipeCandidate(); 
                console.log(e);
            });
    }
    editPacket(){
        this.loading = true;
        var obj = {name: this.candidate.name, quota: this.candidate.quota}
        this.serverService.editData(0, obj, this.candidate.id)
            .subscribe(response => {
                this.fill();
                this.wipeCandidate(); 
            }, e => {
                this.fill();
                this.wipeCandidate(); 
                console.log(e);
            });
    }

    deletePacket(){
        this.loading = true;
        var obj = {name: this.candidate.name, quota: this.candidate.quota}
        this.serverService.deleteData(0, obj, this.candidate.id)
            .subscribe(response => {
                this.fill();
                this.wipeCandidate(); 
            }, e => {
                this.fill();
                this.wipeCandidate(); 
                console.log(e);
            });
    }
}
