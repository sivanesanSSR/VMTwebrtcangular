import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideocallRoutingModule } from './videocall-routing.module';
import { VideolayoutComponent } from './videolayout/videolayout.component';
import { CallinfoDialogComponent } from './callinfo-dialog/callinfo-dialog.component';


@NgModule({
  declarations: [
    VideolayoutComponent,
    CallinfoDialogComponent
  ],
  imports: [
    CommonModule,
    VideocallRoutingModule
  ]
})
export class VideocallModule { }
