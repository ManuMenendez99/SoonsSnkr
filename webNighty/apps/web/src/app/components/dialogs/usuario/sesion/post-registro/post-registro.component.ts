import { Component, OnInit } from '@angular/core';
// tslint:disable: nx-enforce-module-boundaries
import { LoginService } from 'apps/web/src/app/services/firebase/login.service';
import { UsuarioService } from 'apps/web/src/app/services/usuario/usuario.service';

import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'nighty-post-registro',
  templateUrl: './post-registro.component.html',
  styleUrls: ['./post-registro.component.scss']
})
export class PostRegistroComponent implements OnInit {

  _isEmailVerified: boolean

  constructor(public usuarioService: UsuarioService) { }

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

}
