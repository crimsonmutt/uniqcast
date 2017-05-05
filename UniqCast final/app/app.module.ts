import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder }      from '@angular/forms';
import { Validators }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { LoginComponent }   from './login.component';
import { PacketListComponent }   from './packetlist.component';
import { ChannelListComponent }   from './channellist.component';
import { HttpModule } from '@angular/http'; 
import { ServerService } from "./server.service"

@NgModule({
  id: 'RootModule',
  imports:      [ HttpModule, BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, LoginComponent, PacketListComponent, ChannelListComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ServerService, FormBuilder ],
})
export class AppModule {
  
}
