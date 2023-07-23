import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideolayoutComponent } from './videolayout/videolayout.component';

const routes: Routes = [
  {path:'',component:VideolayoutComponent}
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideocallRoutingModule { }
