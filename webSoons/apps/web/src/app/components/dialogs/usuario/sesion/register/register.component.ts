import { Component, OnInit, Inject } from '@angular/core';
// tslint:disable: nx-enforce-module-boundaries
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroupsModule } from '@Soons/form-group';

@Component({
  selector: 'Soons-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    public dialog: MatDialogRef<RegisterComponent>,
    private formGroups: FormGroupsModule
  ) { }

  ngOnInit(): void {
  }

  tryRegister() {
    this.dialog.close({ changeDialogAtSignIn: false, usuario: { correo: this.correoValue, password: this.passwordValue } })
    // this.dialog.close({ changeDialogAtSignIn: false, usuario: { correo: "manolo.meniba@gmail.com", password: "@Magacela199_9_12!" } })
  }

  changeRegisterToLogin() {
    this.dialog.close({ changeDialogAtSignIn: true, usuario: undefined })
  }

  loginViaSocial(social: number) {
    this.dialog.close({ loginWith: social, changeDialogAtSignIn: false, usuario: { correo: this.correoValue, password: this.passwordValue, keepSesion: false } })
  }

  get correo() { return this.formGroups.registerForm.get('correo') }
  get password() { return this.formGroups.registerForm.get('password') }

  get correoValue() { return this.formGroups.registerForm.value.correo }
  get passwordValue() { return this.formGroups.registerForm.value.password }

  get formulario() { return this.formGroups.registerForm }
}
