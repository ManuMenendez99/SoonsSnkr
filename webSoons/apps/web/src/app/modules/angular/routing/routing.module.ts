import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundError404Component } from '../../../components/page-not-found-error404/page-not-found-error404.component';
import { WelcomeComponent } from '../../../components/welcome/welcome.component';
import { ChatComponent } from '../../../components/chat/chat.component';
import { AuthGuardService as AuthGuard } from '../../../services/authGuard/auth-guard.service';
import { UserInfoComponent } from '../../../components/dialogs/usuario/user-info/user-info.component';
import { ConfiguracionMarcasComponent } from '../../../components/configuracion-marcas/configuracion-marcas.component';

const appRoutes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: { title: 'Bienvenido' },
  },
  // {
  //   path: 'chat',
  //   component: ChatComponent,
  //   data: { title: 'Chat', categoriasEsperadas: [null] },
  //   canActivate: [AuthGuard],
  // },
  {
    path: 'userInfo',
    component: UserInfoComponent,
    data: { title: 'User Info', categoriasEsperadas: [null] }
  },
  {
    path: 'configuracionMarcas',
    component: ConfiguracionMarcasComponent,
    data: { title: 'Configuración Marcas', categoriasEsperadas: [null]}
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