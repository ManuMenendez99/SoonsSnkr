import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundError404Component } from '../../../components/page-not-found-error404/page-not-found-error404.component';
import { WelcomeComponent } from '../../../components/welcome/welcome.component';
import { ChatComponent } from '../../../components/chat/chat.component';

const appRoutes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: { title: 'Bienvenido' },
  },
  {
    path: 'chat',
    component: ChatComponent,
    data: { title: 'Chat' },
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundError404Component },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {}
