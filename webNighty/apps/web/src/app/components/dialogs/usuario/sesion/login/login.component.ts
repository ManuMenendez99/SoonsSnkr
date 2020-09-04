import { Component, OnInit, Inject } from '@angular/core';
// tslint:disable: nx-enforce-module-boundaries
import { FormGroupsModule } from '@nighty/form-group';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'nighty-login',
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
    // this.dialog.close({ changeDialogAtSignIn: false, usuario: { correo: this.correoValue, password: this.passwordValue, keepSesion: this.keepSesionValue  } })
    this.dialog.close({ changeDialogAtSignIn: false, usuario: { correo: "manolo.meniba@gmail.com", password: "@Magacela199_9_12!", keepSesion: this.keepSesionValue  } })
  }

  changeLoginToRegister() {
    this.dialog.close({ changeDialogAtSignIn: true, usuario: undefined })
  }



  get correo() { return this.loginFormulario.get('correo') }
  get contraseña() { return this.loginFormulario.get('contraseña') }
  get keepSesion() { return this.loginFormulario.get('keepSesion') }

  get correoValue() { return this.loginFormulario.value.correo }
  get passwordValue() { return this.loginFormulario.value.password }
  get keepSesionValue() { return this.loginFormulario.value.keepSesion }

  get loginFormulario() { return this.formGroups.loginForm }

}
