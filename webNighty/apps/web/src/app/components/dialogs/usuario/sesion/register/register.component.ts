import { Component, OnInit, Inject } from '@angular/core';
// tslint:disable: nx-enforce-module-boundaries
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroupsModule } from '@nighty/form-group';

@Component({
  selector: 'nighty-register',
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
  }

  changeRegisterToLogin() {
    this.dialog.close({ changeDialogAtSignIn: true, usuario: undefined })
  }

  get correo() { return this.formGroups.registerForm.get('correo') }
  get password() { return this.formGroups.registerForm.get('password') }

  get correoValue() { return this.formGroups.registerForm.value.correo}
  get passwordValue() { return this.formGroups.registerForm.value.password}

  get formulario() { return this.formGroups.registerForm }
}
