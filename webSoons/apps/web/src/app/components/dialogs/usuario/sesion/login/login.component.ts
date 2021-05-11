import { Component, OnInit, Inject } from '@angular/core';
// tslint:disable: nx-enforce-module-boundaries
import { FormGroupsModule } from '@Soons/form-group';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'Soons-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public dialog: MatDialogRef<LoginComponent>,
    public formGroups: FormGroupsModule
  ) { }

  ngOnInit(): void {
  }

  tryLogin() {
    this.dialog.close({ changeDialogAtSignIn: false, usuario: { correo: this.correoValue, password: this.passwordValue, keepSesion: this.keepSesionValue  } })
    // this.dialog.close({ loginWith: 1, changeDialogAtSignIn: false, usuario: { correo: "manolo.meniba@gmail.com", password: "@Magacela199_9_12!", keepSesion: this.keepSesionValue } })
  }

  changeLoginToRegister() {
    this.dialog.close({ accion: "changeLoginToRegister", loginWith: 0, changeDialogAtSignIn: true, usuario: undefined })
  }
  
  loginViaSocial(social: number) {
    this.dialog.close({ accion: "loginViaSocial", loginWith: social, changeDialogAtSignIn: false, usuario: { correo: null, password: null, keepSesion: this.keepSesionValue } })
  }

  forgotPassword() {
    this.dialog.close({ accion: "forgotPassword", loginWith: 0, changeDialogAtSignIn: false, usuario: { correo: this.correo } })
  }

  get correo() { return this.loginFormulario.get('correo') }
  get contraseña() { return this.loginFormulario.get('contraseña') }
  get keepSesion() { return this.loginFormulario.get('keepSesion') }

  get correoValue() { return this.loginFormulario.value.correo }
  get passwordValue() { return this.loginFormulario.value.password }
  get keepSesionValue() { return this.loginFormulario.value.keepSesion }

  get loginFormulario() { return this.formGroups.loginForm }

}
