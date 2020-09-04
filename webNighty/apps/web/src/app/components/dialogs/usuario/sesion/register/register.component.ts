import { Component, OnInit, Inject } from '@angular/core';
// tslint:disable: nx-enforce-module-boundaries
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'nighty-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    public dialog: MatDialogRef<RegisterComponent>,
  ) { }

  ngOnInit(): void {
  }

  tryRegister() {
    this.dialog.close({ changeDialogAtSignIn: false, usuario: { correo: "manolo.meniba@gmail.com", password: "@Magacela199_9_12!" } })
  }

  changeRegisterToLogin() {
    this.dialog.close({ changeDialogAtSignIn: true, usuario: undefined })
  }
}
