import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { ToastrService } from "ngx-toastr";
import { GetterSetterService } from '../getterSetter/getter-setter.service';
import { EncriptadoService } from '../encriptado/encriptado.service';
import { UsuariosRegistrandose, Usuarios, MotivosInhabilitacion } from '@nighty/models';
import { DialogsService } from '../dialogs/dialogs.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  firebaseUser: firebase.User

  constructor(
    private encriptado: EncriptadoService,
    private dialog: DialogsService,
    private getterSetter: GetterSetterService,
    private toastr: ToastrService
  ) { }

  login() {
    this.dialog.abrirLogin().afterClosed().subscribe(
      (result: any = undefined) => {
        if (result !== undefined) {
          if (result.changeDialogAtSignIn) {
            this.dialog.abrirRegister()
          } else if (result.usuario !== undefined) {
            const passwordEncriptada = this.encriptado.encriptar(result.usuario.password)
            this.firebaseUser = firebase.auth().currentUser
            firebase.auth().signInWithEmailAndPassword(result.usuario.correo, passwordEncriptada).then(
              res => {
                this.firebaseUser = res.user
                if (this.verifyEmail()) {
                  this.getterSetter.Emails.subscribe(
                    RESemails => {
                      const emailsPulido = RESemails.find(x => x.email === result.usuairo.correo)
                      if (emailsPulido !== undefined && emailsPulido !== null) {
                        this.getterSetter.EmailsPersona.subscribe(
                          RESemailsPersona => {
                            const emailsPersonaPulido = RESemailsPersona.find(x => x.email === emailsPulido.id)
                            if (emailsPersonaPulido.orden === 1) {
                              this.getterSetter.Usuarios.subscribe(
                                RESusuarios => {
                                  const usuariosPulido = RESusuarios.find(x => x.persona === emailsPersonaPulido.persona)
                                  if (usuariosPulido !== undefined) {
                                    if (usuariosPulido.logInWith === 1) {
                                      if (passwordEncriptada === usuariosPulido.password) {
                                        if (result.usuario.keepSesion) {
                                          localStorage.setItem("usuario", JSON.stringify(usuariosPulido))
                                        }
                                        this.toastr.success("Has iniciado sesión", "Contraseña correcta")
                                      } else {
                                        this.toastr.error("Las contraseñas no coinciden", "Contraseña incorrecta")
                                      }
                                    } else {
                                      let mensaje = null
                                      switch (usuariosPulido.logInWith) {
                                        case 2:
                                          mensaje = "Este usuario se conecta mediante Google"
                                          break;
                                        case 3:
                                          mensaje = "Este usuario se conecta mediante Facebook"
                                          break;
                                        case 4:
                                          mensaje = "Este usuario se conecta mediante Twitter"
                                          break;
                                        default:
                                          console.log("Error de aserción logInWith")
                                          break;
                                      }
                                      this.toastr.error(mensaje, "Fallo en el tipo de inicio de sesión")
                                    }
                                  } else {
                                    this.toastr.error("El correo esta asociado a una perseona sin usuario", "USUARIO NO ENCONTRADO")
                                  }
                                },
                                err => {
                                  console.log("Fallo en la obtención de los usuarios en getter and setter")
                                  console.log(err)
                                }
                              )
                            } else {
                              this.toastr.error("El correo esta asociado a una cuenta sin ser el correo principal", "CORREO FALLIDO")
                            }
                          },
                          err => {
                            console.log("Fallo en la obtención de las personasCorreo en getter and setter")
                            console.log(err)
                          }
                        )
                      } else {
                        this.getterSetter.UsuariosRegistrandose.subscribe(
                          RESusuariosRegistrandose => {
                            const usuariosRegistrandosePulidos = RESusuariosRegistrandose.find(x => x.email === result.usuario.correo)
                            if (usuariosRegistrandosePulidos !== undefined && usuariosRegistrandosePulidos !== null) {
                              this.dialog.abrirPostRegistro()
                            } else {
                              this.toastr.error("No se ha encontrado el correo", "CORREO NO ENCONTRADO")
                            }
                          },
                          err => {
                            const error = "Fallo en la obtención de usuarios registrandose "
                            this.toastr.error(error)
                            console.log(error + " en getter and setter")
                            console.log(err)
                          }
                        )

                      }
                    },
                    err => {
                      const error = "Fallo en la obtención de los correos"
                      this.toastr.error(error, "Uy, hay un fallo")
                      console.log(error + " en getter and setter")
                      console.log(err)
                    }
                  )
                } else if (!this.verifyEmail()) {
                  this.toastr.error("Todavía no has verificado tu correo electronico")
                } else if (this.firebaseUser !== undefined && this.firebaseUser !== null) {
                  console.log("Ha ocurrido un error en la obtencion dle usuario")
                } else {
                  console.log("Ha ocurrido un error en la comprobacion del usuario emailverified")
                }
              }
            )
          }
        }
      }
    )
  }

  loginViaGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().languageCode = 'es';
    firebase.auth().signInWithPopup(provider).then(function (result) {
      this.firebaseUser = result.user;
    }).catch(function (error) {
    });
  }

  loginViaFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().languageCode = "es-Es";
    firebase.auth().signInWithPopup(provider).then(function (result) {
      this.user = result.user;
    }).catch(function (error) {
    });
  }

  register() {
    this.dialog.abrirRegister().afterClosed().subscribe(
      result => {
        if (result) {
          if (result.changeDialogAtSignIn) {
            this.dialog.abrirLogin()
          } else if (result.usuario !== undefined) {
            const passwordEncriptada = this.encriptado.encriptar(result.usuario.password)
            firebase.auth().createUserWithEmailAndPassword(result.usuario.correo, passwordEncriptada).then(
              res => {
                this.firebaseUser = res.user
                const usuariosRegistrandose: UsuariosRegistrandose = { email: result.usuario.correo }
                this.getterSetter.setUsuariosRegistrandose(usuariosRegistrandose)
                this.sendEmailVerification();
                this.dialog.abrirPostRegistro()
              }
            )
          }
        }
      }
    )
  }

  sendEmailVerification() {
    firebase.auth().currentUser.sendEmailVerification()
  }

  sendPasswordResetEmail(passwordResetEmail: string) {
    return firebase.auth().sendPasswordResetEmail(passwordResetEmail);
  }

  logout() {
    firebase.auth().signOut().then(function () {
      this.toastr.show("Ha salido de su cuenta ", "Log Out")
    }).catch(function (error) {
      console.log(error)
    });;
    localStorage.removeItem('usuario');
  }

  verifyEmail() {
    return this.firebaseUser.emailVerified
  }

  habilitacionUsuario(usuario: Usuarios, habilitar: boolean, inhabilitacion: MotivosInhabilitacion) {
    
  }
}
