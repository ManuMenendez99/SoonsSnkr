import { Injectable, Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../../components/dialogs/usuario/sesion/login/login.component';
import { RegisterComponent } from '../../components/dialogs/usuario/sesion/register/register.component';
import { ComponentType } from 'ngx-toastr';
import { PostRegistroComponent } from '../../components/dialogs/usuario/sesion/post-registro/post-registro.component';

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

  abrirPostRegistro() {
    return this.abrirDialog(PostRegistroComponent)
  }

  abrirDialog(componente: ComponentType<any>) {
    return this.dialog.open(componente, { panelClass: "app-full-bleed-dialog" })
  }
}
