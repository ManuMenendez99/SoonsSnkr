import { Injectable, Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../../components/dialogs/usuario/sesion/login/login.component';
import { RegisterComponent } from '../../components/dialogs/usuario/sesion/register/register.component';
import { ComponentType } from 'ngx-toastr';
import { PostRegistroComponent } from '../../components/dialogs/usuario/sesion/post-registro/post-registro.component';
import { CrearGrupoComponent } from '../../components/dialogs/chat/crear-grupo/crear-grupo.component';
// import { Amigos, Personas } from '@Soons/models';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(private dialog: MatDialog) { }

  abrirLogin() {
    return this.abrirDialog(LoginComponent)
  }

  abrirRegister() {
    return this.abrirDialog(RegisterComponent)
  }

  abrirLogout() {
    return this.abrirDialog(RegisterComponent)
  }

  abrirPostRegistro(social: number) {
    return this.abrirDialog(PostRegistroComponent, { SignInWith: social }, true)
  }

  // abrirCrearGrupoChat(personasAmigos: Personas[], amigos: Amigos[], administrador: Personas) {
  //   return this.abrirDialog(CrearGrupoComponent, { PersonasAmigos: personasAmigos, Amigos: amigos, Administrador: administrador })
  // }

  private abrirDialog(componente: ComponentType<any>, data?: any, disableClose?: boolean) {
    return this.dialog.open(componente, { panelClass: "app-full-bleed-dialog", data: data, disableClose: disableClose })
  }
}
