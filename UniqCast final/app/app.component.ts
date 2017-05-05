import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <login (stateChange)=stateChange($event) *ngIf="state == 0"></login>
    <packetlist (stateChange)=stateChange($event) *ngIf="state == 1"></packetlist>
    <channellist (stateChange)=stateChange($event) *ngIf="state == 2"></channellist>
  `
})
export class AppComponent {
  private state = 0

  stateChange(e) {
    this.state = e;
    if(e == 0) {
      Token.jwt = "";
    }
  }
}

export class Token{
  public static jwt = "";
}