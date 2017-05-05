import {Component, EventEmitter, Output} from "@angular/core";
import {ServerService} from "./server.service"

@Component({
    selector: 'channellist',
    templateUrl: './app/channellist.template.html'
})
export class ChannelListComponent{
    private channelList = [];
    private packetList = [];
    private loading = true;
    private localState = 0;

    private candidate = {
        id: "",
        name: "",
        url: "",
        package: 0
    }

    @Output() stateChange = new EventEmitter();

    constructor(private serverService: ServerService){
        this.fill();
    }

    wipeCandidate(){
        this.candidate = {
            id: "",
            name: "",
            url: "",
            package: 0
        }
    }

    fill(){
        this.serverService.getData(1)
            .subscribe(response => {
                this.loading = false;
                this.channelList = response;
            }, e => {
                this.loading = false;
                console.log(e);
            });
        this.serverService.getData(0)
            .subscribe(response => {
                this.loading = false;
                this.packetList = response
            }, e => {
                this.loading = false;
                console.log(e);
            });
    }
    
    addChannel(){
        this.loading = true;
        var obj;
        this.candidate.package == 0 ? 
              obj = {name: this.candidate.name, url: this.candidate.url, package: {}} 
            : obj = {name: this.candidate.name, url: this.candidate.url, package: this.packetList[this.candidate.package - 1]};
        console.log(obj);
        this.serverService.addData(1, obj)
            .subscribe(response => {
                this.fill();
                this.wipeCandidate(); 
            }, e => {
                this.fill();
                this.wipeCandidate(); 
                console.log(e);
            });
    }
    editChannel(){
        this.loading = true;
        var obj;
        this.candidate.package == 0 ? 
              obj = {name: this.candidate.name, url: this.candidate.url, package: {}} 
            : obj = {name: this.candidate.name, url: this.candidate.url, package: this.packetList[this.candidate.package - 1]};
        this.serverService.editData(1, obj, this.candidate.id)
            .subscribe(response => {
                this.fill();
                this.wipeCandidate(); 
            }, e => {
                this.fill();
                this.wipeCandidate(); 
                console.log(e);
            });
    }

    deleteChannel(){
        this.loading = true;
        var obj;
        this.candidate.package == 0 ? 
              obj = {name: this.candidate.name, url: this.candidate.url, package: {}} 
            : obj = {name: this.candidate.name, url: this.candidate.url, package: this.packetList[this.candidate.package - 1]}
        this.serverService.deleteData(1, obj, this.candidate.id)
            .subscribe(response => {
                this.fill();
                this.wipeCandidate(); 
            }, e => {
                this.fill();
                this.wipeCandidate(); 
                console.log(e);
            });
    }
    logging(){
        console.log(JSON.stringify(this.candidate));
    }

    setPackage(p){
        if(p == undefined){
            this.candidate.package = 0;
            return;
        }
        this.packetList.forEach((item, index) =>{
            if(p.id == item.id){
                this.candidate.package = index + 1;
                return;
            }
        })
    }
}
