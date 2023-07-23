import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatlayoutComponent } from './chatlayout/chatlayout.component';


@NgModule({
  declarations: [
    ChatlayoutComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
