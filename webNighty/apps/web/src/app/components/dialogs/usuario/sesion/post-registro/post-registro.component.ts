import { Component, OnInit, Inject } from '@angular/core';
// tslint:disable: nx-enforce-module-boundaries
import { LoginService } from 'apps/web/src/app/services/firebase/login.service';
import { UsuarioService } from 'apps/web/src/app/services/usuario/usuario.service';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'nighty-post-registro',
  templateUrl: './post-registro.component.html',
  styleUrls: ['./post-registro.component.scss']
})
export class PostRegistroComponent implements OnInit {

  _isEmailVerified: boolean

  constructor(
    public usuarioService: UsuarioService,
    public dialogRef: MatDialogRef<PostRegistroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { SignInWith: number }
  ) { }

  ngOnInit(): void {
    this.verifyEmail()
  }

  verifyEmail() {
    const intervalo = setInterval(() => {
      firebase.auth().currentUser.reload().then(
        () => {
          console.log(firebase.auth().currentUser)
          if (firebase.auth().currentUser.emailVerified) {
            clearInterval(intervalo)
            this._isEmailVerified = true
          } else {
            this._isEmailVerified = false
          }
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
    }, 500)
  }

  get isLoggedViaSocial() {
    if ([2, 3, 4].includes(this.data.SignInWith)) {
      return false
    } else {
      return true
    }
  }

}
