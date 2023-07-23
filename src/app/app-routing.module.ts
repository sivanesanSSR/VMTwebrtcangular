import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path: 'chat',loadChildren: () => import('./modules/chat_module/chat/chat.module').then(m => m.ChatModule)},
  {path: 'video',loadChildren: () => import('./modules/videocall/videocall.module').then(m => m.VideocallModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
