import { Injectable, Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../../components/dialogs/usuario/sesion/login/login.component';
import { RegisterComponent } from '../../components/dialogs/usuario/sesion/register/register.component';
import { ComponentType } from 'ngx-toastr';
import { PostRegistroComponent } from '../../components/dialogs/usuario/sesion/post-registro/post-registro.component';
import { CrearGrupoComponent } from '../../components/dialogs/chat/crear-grupo/crear-grupo.component';
import { ComprarProductoComponent } from '../../components/dialogs/comprar-producto/comprar-producto.component';
import { Productos } from '@Soons/models';
import { CrearProductoComponent } from '../../components/dialogs/crear-producto/crear-producto.component';
import { SubirProductoComponent } from '../../components/dialogs/subir-producto/subir-producto.component';
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

  abrirComprarProducto(producto: Productos) {
    return this.abrirDialog(ComprarProductoComponent, { producto: producto }, true)
  }

  abrirCrearProducto() {
    return this.abrirDialog(CrearProductoComponent, null, true)
  }

  abrirSubirProducto() {
    return this.abrirDialog(SubirProductoComponent, null, true)
  }

  // abrirCrearGrupoChat(personasAmigos: Personas[], amigos: Amigos[], administrador: Personas) {
  //   return this.abrirDialog(CrearGrupoComponent, { PersonasAmigos: personasAmigos, Amigos: amigos, Administrador: administrador })
  // }

  private abrirDialog(componente: ComponentType<any>, data?: any, disableClose?: boolean) {
    return this.dialog.open(componente, { panelClass: "app-full-bleed-dialog", data: data, disableClose: disableClose })
  }
}
