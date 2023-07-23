import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { FormsModule } from '@angular/forms';
import { WebsocketService } from './services/socket/websocket.service';
import { ChatModule } from './modules/chat_module/chat/chat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChatModule,
    BrowserAnimationsModule,
  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
