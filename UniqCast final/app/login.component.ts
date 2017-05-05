import {Component, EventEmitter, Output} from "@angular/core";
import {ServerService} from "./server.service"
import {Token} from "./app.component"

@Component({
    selector: 'login',
    templateUrl: './app/login.template.html'
})
export class LoginComponent{
    private credentials = {identifier: "uniqcaster", password: "cast457"};
    private loginFail = false;
    private loginPending = false;

    @Output() stateChange = new EventEmitter();

    constructor(private serverService: ServerService){
        
    }

    loginSubmit(){
        this.loginPending = true;
        this.serverService.login(this.credentials)
            .subscribe(response => {
                this.loginPending = false; 
                this.loginFail = false;
                this.credentials.password="";
                this.stateChange.emit(1);
                Token.jwt = response.jwt;
            }, e => {
                this.loginPending = false; 
                this.loginFail = true;
                this.credentials.password="";
            });
    }
}