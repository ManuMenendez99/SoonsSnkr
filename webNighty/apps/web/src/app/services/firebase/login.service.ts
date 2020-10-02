import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { ToastrService } from "ngx-toastr";
import { GetterSetterService } from '../getterSetter/getter-setter.service';
import { UsuariosRegistrandose, Usuarios, MotivosInhabilitacion } from '@nighty/models';
import { DialogsService } from '../dialogs/dialogs.service';
import { APIService } from '../api/api.service';
import { Habilitacion, GoogleUser } from '@nighty/interfaces-sql';
import { DeteccionErrorService } from './deteccion-error.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  firebaseUser: firebase.User

  constructor(
    private api: APIService,
    private error: DeteccionErrorService,
    private dialog: DialogsService,
    private getterSetter: GetterSetterService,
    private toastr: ToastrService
  ) { }

  login() {
    this.dialog.abrirLogin().afterClosed().subscribe(
      (result: any = undefined) => {
        if (result !== undefined) {
          if (result.changeDialogAtSignIn) {
            this.register()
          } else if ([2, 3, 4].includes(result.loginWith)) {
            this.loginViaSocial(result.loginWith, result.usuario.keepSesion)
          } else if (result.usuario !== undefined) {
            this.existeUsuario(result.usuario.correo).subscribe(
              (res: Array<any>) => {
                if (length !== 0) {

                } else {
                  if (this.validarDatos(res["ep_id"])) {
                    if (res["ep_orden"] === 1) {
                      // Correo como principal, bien, ahora tenemos que ver si es usuario o solo persona
                      if (this.validarDatos(res["u_id"])) {
                        // Esta es la cuenta de un usuario, vamos a ver si se loggea mediante correo y contraseña 
                        if (res["u_logInWith"] === 1) {
                          // Se loggea mediante correo y contraseña
                          // vamos a ver si la contraseña la acepta o no mediante firebase
                          hacerLogin(res["u_id"])
                        } else {
                          // Se loggea mediante social
                          cambiarASocial(res["u_logInWith"], result.usuario.keepSesion)
                        }
                      } else {
                        // Esta es la cuenta de una persona solo
                        usuarioNoExiste()
                      }
                    } else {
                      // El correo no esta como principal
                      correoNoPrincipal()
                    }
                  } else if (this.validarDatos(res["ur_id"])) {
                    // No hay que loggearlo, solo se loggea tras haber terminado de completar sus datos, hasta entonces el usuario no esta dentro de su cuenta
                    if (res["ur_logInWith"] === 1) {
                      this.postRegistro(res["ur_logInWith"])
                    } else {
                      this.toastr.warning("Este correo esta asociado al inicio de sesión mediante " + (res["ur_logInWith"] === 2 ? 'Google' : res["ur_logInWith"] === 2 ? 'Facebook' : res["ur_logInWith"] === 3 ? 'Twitter' : 'ERROR'))
                    }
                  } else if (this.validarDatos(res["e_id"])) {
                    // Aqui no deberia de llegar nunca, solo si un bar o un restaurante tiene el email como principal y alguien esta intentando crear una cuenta con ese, 
                    correoParaLocal()
                  } else {
                    console.log("Error de aserción")
                  }
                }

                function cambiarASocial(social: number, keepSesion: boolean) {
                  let mensaje = ""
                  switch (social) {
                    case 2:
                      mensaje = "Este usuario se loggea mediante Google"
                      break;
                    case 3:
                      mensaje = "Este usuario se loggea mediante Facebook"

                      break;
                    case 4:
                      mensaje = "Este usuario se loggea mediante Twitter"

                      break;

                    default:
                      break;
                  }
                  this.toastr.warning(mensaje, "Tipo de inicio de sesion INCORRECTO")
                  this.loginViaSocial(social, keepSesion)
                }

                function hacerLogin(idUsuario: number) {
                  firebase.auth().signInWithEmailAndPassword(result.usuario.correo, result.usuario.password).then(
                    RESGoogle => {
                      this.firebaseUser = RESGoogle.user
                      if (this.verifyEmail()) {
                        if (result.usuario.keepSesion) {
                          this.getterSetter.usuarios.subscribe(
                            RESUsuarios => {
                              const usuarioEncontrado = RESUsuarios.find(x => x.id === res[idUsuario])
                              localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado))
                            },
                            err => {
                              this.errorEnGetterAndSetter(err, "usuarios")
                            }
                          )
                        }
                        this.toastr.success("Has iniciado sesión", "Contraseña correcta")
                      } else {
                        this.toastr.warning("El usuario no ha verificado todavía su email")
                      }
                    }
                  ).catch(
                    err => {
                      const error = this.error.detectarError(err)
                      this.toastr.error(error, "Error en el inicio de sesion")
                      console.log("Error en el inicio de sesion de firebase")
                      console.log(error)
                    }
                  )
                }

                function usuarioNoExiste() {
                  this.toastr.warning("Trata de registrarte con nosotros", "USUARIO NO EXISTENTE")
                  this.register()
                }
                
                function correoNoPrincipal() {
                  this.dialog.warning("Este usuario tiene un correo principal diferente al proporcionado", "CORREO SECUNDARIO")
                }

                function correoParaLocal() {
                  this.toastr.show("Este correo se esta usando para una empresa, no se podra utilizar para uso personal")
                }
              },
              err => {
                const error = "Error en la obtención de datos de la existencia del usuario"
                this.toastr.error(error)
                console.log(error + " en vista")
                console.log(err)
              }
            )
            this.getterSetter.Emails.subscribe(
              RESEmails => {
                const emailsPulido = RESEmails.find(x => x.email === result.usuario.correo)
                if (this.validarDatos(emailsPulido)) {
                  this.getterSetter.EmailsPersona.subscribe(
                    RESEmailsPersona => {
                      const emailsPersonaPulido = RESEmailsPersona.find(x => x.email === emailsPulido.id)
                      if (this.validarDatos(emailsPersonaPulido)) {
                        if (emailsPersonaPulido.orden === 1) {
                          this.getterSetter.Usuarios.subscribe(
                            RESUsuarios => {
                              const usuariosPulido = RESUsuarios.find(x => x.persona === emailsPersonaPulido.persona)
                              if (this.validarDatos(usuariosPulido)) {
                                if (usuariosPulido.logInWith === 1) {
                                  firebase.auth().signInWithEmailAndPassword(result.usuario.correo, result.usuario.password).then(
                                    RESGoogle => {
                                      this.firebaseUser = RESGoogle.user
                                      if (this.verifyEmail()) {
                                        if (result.usuario.keepSesion) {
                                          localStorage.setItem("usuario", JSON.stringify(usuariosPulido))
                                        }
                                        this.toastr.success("Has iniciado sesión", "Contraseña correcta")
                                      } else {
                                        this.toastr.warning("El usuario no ha verificado todavía su email")
                                      }
                                      this.dialog.abrirPostRegistro(1)
                                    }
                                  ).catch(
                                    err => {
                                      const error = this.error.detectarError(err)
                                      this.toastr.error(error, "Error en el inicio de sesion")
                                      console.log("Error en el inicio de sesion de firebase")
                                      console.log(error)
                                    }
                                  )
                                } else {
                                  let mensaje = ""
                                  switch (usuariosPulido.logInWith) {
                                    case 2:
                                      mensaje = "Este usuario se loggea mediante Google"
                                      break;
                                    case 3:
                                      mensaje = "Este usuario se loggea mediante Facebook"

                                      break;
                                    case 4:
                                      mensaje = "Este usuario se loggea mediante Twitter"

                                      break;

                                    default:
                                      break;
                                  }
                                  this.toastr.error(mensaje, "Tipo de inicio de sesion INCORRECTO")
                                }
                              } else {
                                this.toastr.error("Este correo pertenece a una persona sin usuario", "PERSONA SIN USUARIO")
                              }
                            },
                            err => {
                              this.errorEnGetterAndSetter(err, "Usuarios")
                            }
                          )
                        } else {
                          this.toastr.error("El correo de esta persona no esta como el correo principal", "CORREO SECUNDARIO")
                        }
                      } else {

                      }
                    },
                    err => {
                      this.errorEnGetterAndSetter(err, "EmailsPersona")
                    }
                  )
                } else {
                  this.getterSetter.UsuariosRegistrandose.subscribe(
                    RESUsuariosRegistrandose => {
                      const usuariosRegistrandosePulidos = RESUsuariosRegistrandose.find(x => x.email === result.usuario.correo)
                      if (this.validarDatos(usuariosRegistrandosePulidos)) {
                        if (usuariosRegistrandosePulidos.logInWith === 1) {
                          this.toastr.show("El usuario todavía no ha creado su cuenta")
                          this.dialog.abrirPostRegistro(1)
                        } else {
                        }
                      } else {
                        this.toastr.error("No se ha encontrado el email en nuestra base de datos")
                      }
                    },
                    err => {
                      this.errorEnGetterAndSetter(err, "usuarios Registrandose")
                    }
                  )
                }
              },
              err => {
                this.errorEnGetterAndSetter(err, "Emails")
              }
            )
          }
        }
      }
    )
  }

  postRegistro(logInWith: number) {
    this.dialog.abrirPostRegistro(logInWith)
  }

  loginViaSocial(social: number, keepSesion: boolean) {
    let provider = null
    switch (social) {
      case 2:
        provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().languageCode = 'es'
        break;
      case 3:
        provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().languageCode = 'es - Es'
        break;
      case 4:
        provider = new firebase.auth.TwitterAuthProvider
        firebase.auth().languageCode = 'es - Es'
        break;

      default:
        console.log("Error de asercion loginViaSocial")
        break;
    }

    firebase.auth().signInWithPopup(provider).then(
      RESSocial => {
        // Esta el email entre los nuestros
        this.firebaseUser = RESSocial.user
        this.getterSetter.Emails.subscribe(
          RESEmails => {
            const emailsFiltrados = RESEmails.filter(x => x.email === this.firebaseUser.email)
            if (emailsFiltrados.length !== 0) {
              this.getterSetter.EmailsPersona.subscribe(
                RESEmailsPersona => {
                  const emailsPersonasFiltrados = RESEmailsPersona.filter(x => emailsFiltrados.map(y => y.id).includes(x.email))
                  if (emailsPersonasFiltrados.length !== 0) {
                    this.getterSetter.Usuarios.subscribe(
                      RESUsuarios => {
                        const usuariosPulido = RESUsuarios.find(x => emailsPersonasFiltrados.map(y => y.persona).includes(x.persona))
                        if (this.validarDatos(usuariosPulido)) {
                          if (keepSesion) {
                            localStorage.setItem("usuario", JSON.stringify(usuariosPulido))
                          }
                          this.toastr.success("Has iniciado sesión", "Contraseña correcta")
                        } else {
                          const usuariosRegistrandose: UsuariosRegistrandose = { email: this.firebaseUser.email, logInWith: social }
                          this.getterSetter.setUsuariosRegistrandose(usuariosRegistrandose)
                          this.toastr.success("Completa tus datos para continuar", "CUENTA CREADA")
                          this.dialog.abrirPostRegistro(social)
                        }
                      },
                      err => {
                        this.errorEnGetterAndSetter(err, "Usuarios")
                        this.logout()
                      }
                    )
                  } else {
                    const usuariosRegistrandose: UsuariosRegistrandose = { email: this.firebaseUser.email, logInWith: social }
                    this.getterSetter.setUsuariosRegistrandose(usuariosRegistrandose)
                    this.toastr.success("Completa tus datos para continuar", "CUENTA CREADA")
                    this.dialog.abrirPostRegistro(social)
                  }
                }
              )
            } else {
              this.getterSetter.UsuariosRegistrandose.subscribe(
                RESUsuariosRegistrandose => {
                  const usuariosRegistrandosePulidos = RESUsuariosRegistrandose.find(x => x.email === this.firebaseUser.email)
                  if (this.validarDatos(usuariosRegistrandosePulidos)) {
                    if (usuariosRegistrandosePulidos.logInWith === social) {
                      this.toastr.success("Completa tus datos para continuar", "CUENTA CREADA")
                      this.dialog.abrirPostRegistro(social)
                    } else {
                      this.toastr.warning("Este correo ya se esta usando para otro usuario")
                      this.logout()
                    }
                  } else {
                    const usuariosRegistrandose: UsuariosRegistrandose = { email: this.firebaseUser.email, logInWith: social }
                    this.getterSetter.setUsuariosRegistrandose(usuariosRegistrandose)
                    this.toastr.success("Completa tus datos para continuar", "CUENTA CREADA")
                    this.dialog.abrirPostRegistro(social)
                  }
                },
                err => {
                  this.errorEnGetterAndSetter(err, "Usuarios Registrandose")
                  this.logout()
                }
              )
            }
          },
          err => {
            this.errorEnGetterAndSetter(err, "Emails")
            this.logout()
          }
        )

      }
    ).catch(
      err => {
        const error = this.error.detectarError(err)
        this.toastr.error(error)
      }
    )
  }

  register() {
    this.dialog.abrirRegister().afterClosed().subscribe(
      (result: any = undefined) => {
        if (result !== undefined) {
          if (result.changeDialogAtSignIn) {
            this.login()
          } else if ([2, 3, 4].includes(result.loginWith)) {
            this.loginViaSocial(result.loginWith, result.usuario.keepSesion)
          } else if (result.usuario !== undefined) {
            this.getterSetter.Emails.subscribe(
              RESEmails => {
                const emailsFiltrados = RESEmails.filter(x => x.email === result.usuario.correo)
                if (emailsFiltrados.length !== 0) {
                  this.getterSetter.EmailsPersona.subscribe(
                    RESEmailsPersona => {
                      const emailsPersonasFiltrados = RESEmailsPersona.filter(x => emailsFiltrados.map(y => y.id).includes(x.email))
                      if (emailsPersonasFiltrados.length !== 0) {
                        this.getterSetter.Usuarios.subscribe(
                          RESUsuarios => {
                            const usuariosPulido = RESUsuarios.find(x => emailsPersonasFiltrados.map(y => y.persona).includes(x.persona))
                            if (this.validarDatos(usuariosPulido)) {
                              const usuarioEncontrado = emailsPersonasFiltrados.find(x => x.persona === usuariosPulido.persona)
                              const correoEncontrado = emailsFiltrados.find(x => x.email === result.usuario.correo)
                              if (usuarioEncontrado.orden === 1) {
                                if (usuarioEncontrado.email === correoEncontrado.id) {
                                  firebase.auth().signInWithEmailAndPassword(result.usuario.correo, result.usuario.password).then(
                                    RESGoogleSignIn => {
                                      this.firebaseUser = RESGoogleSignIn.user
                                      this.toastr.warning("Usuario ya creado procediendo al registro completo", "Usuario ya creado")
                                      this.dialog.abrirPostRegistro(1)
                                    }
                                  ).catch(
                                    err => {
                                      if (err === "auth/invalid-password") {
                                        this.toastr.warning("Este correo ya se esta usando para otro usuario", "CORREO YA USADO")
                                      }
                                    }
                                  )
                                }
                              } else {
                                this.toastr.warning("Este correo ya se ha usadopara otro usuario", "CORREO YA USADO")
                              }
                            } else {
                              this.hacerRegister(result.usuario.correo, result.usuario.password)
                            }
                          },
                          err => {
                            this.errorEnGetterAndSetter(err, "usuarios")
                          }
                        )
                      } else {
                        console.log("Hay correos que no estan asociados a una persona")
                      }
                    },
                    err => {
                      console.log(this.errorEnGetterAndSetter(err, "EmailsPersona"))
                    }
                  )
                } else {
                  this.getterSetter.UsuariosRegistrandose.subscribe(
                    RESUsuariosRegistrandose => {
                      const usuariosRegistrandosePulidos = RESUsuariosRegistrandose.find(x => x.email === result.usuario.correo)
                      if (this.validarDatos(usuariosRegistrandosePulidos)) {
                        if (usuariosRegistrandosePulidos.logInWith === 1) {
                          firebase.auth().signInWithEmailAndPassword(result.usuario.correo, result.usuario.password).then(
                            RESGoogleSignIn => {
                              this.firebaseUser = RESGoogleSignIn.user
                              this.toastr.warning("Usuario ya creado procediendo al registro completo", "Usuario ya creado")
                              this.dialog.abrirPostRegistro(1)
                            }
                          ).catch(
                            err => {
                              if (err === "auth/invalid-password") {
                                this.hacerRegister(result.usuario.correo, result.usuario.password)
                              }
                            }
                          )
                        } else {
                          this.toastr.warning("Este correo esta asociado al inicio de sesión mediante " + (usuariosRegistrandosePulidos.logInWith === 2 ? 'Google' : usuariosRegistrandosePulidos.logInWith === 2 ? 'Facebook' : usuariosRegistrandosePulidos.logInWith === 3 ? 'Twitter' : 'ERROR'))
                          this.loginViaSocial(usuariosRegistrandosePulidos.logInWith, result.usuario.keepSesion)
                        }
                      } else {
                        this.hacerRegister(result.usuario.correo, result.usuario.password)
                      }
                    }
                  )
                  this.hacerRegister(result.usuario.correo, result.usuario.password)
                }
              },
              err => {
                this.errorEnGetterAndSetter(err, "emails")
              }
            )
          }
        }
      }
    )
  }

  hacerRegister(correo: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(String(correo), String(password)).then(
      res => {
        this.sendEmailVerification();
        this.firebaseUser = res.user
        const usuariosRegistrandose: UsuariosRegistrandose = { email: correo, logInWith: 1 }
        this.getterSetter.setUsuariosRegistrandose(usuariosRegistrandose)
        this.toastr.success("Verifica tu correo electrónico para continuar", "CUENTA CREADA")
        this.dialog.abrirPostRegistro(1)
      }
    ).catch(
      err => {
        console.log(err)
      }
    )
  }

  sendEmailVerification() {
    firebase.auth().currentUser.sendEmailVerification()
  }

  sendPasswordResetEmail(passwordResetEmail: string) {
    return firebase.auth().sendPasswordResetEmail(passwordResetEmail).then(
      () => {
        this.toastr.success("Se ha enviado el correo para la actualización de contraseña")
      }
    ).catch(
      err => {
        this.toastr.error("No se ha podido realizar el mensaje de cambio de contraseña")
        console.log(err)
      }
    );
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
    const habilitacion: Habilitacion = Object.assign(usuario, { habilitacion: habilitar })
    this.api.habilitacion(habilitacion).subscribe(
      () => {
        usuario.motivoInhabilitacion = inhabilitacion.id
        this.getterSetter.setUsuarios(usuario)
      },
      err => {
        this.toastr.error("No se ha podido inhabilitar este usuario")
        console.log(err)
      }
    )
  }

  eliminacionUsuario() {
    firebase.auth().currentUser.delete().then(function () {
      this.toastr.success("Usuario borrado")
    }).catch(function (error) {
      console.log(error)
      this.toastr.error("No se ha podido borrar el usuario")
    })
  }

  obtencionDatosUsuario() {
    const user = firebase.auth().currentUser
    const googleUser: GoogleUser = {
      name: user.displayName,
      photoUrl: user.photoURL,
      uid: user.uid,
      email: user.email
    }
    return googleUser
  }

  private errorEnGetterAndSetter(err: string, tabla: string) {
    const error = "Error en la obtención de datos de " + tabla
    this.toastr.error(error)
    console.log(error + " en getter and setter")
    console.log(err)
  }

  private validarDatos(object: any) {
    if (object !== undefined && object !== null && object !== "") {
      return true
    } else {
      return false
    }
  }

  private existeUsuario(email: string) {
    return this.api.get(`
    select * from existeUsuario where ur_email = "${email}" or e_email = "${email}"`
    )
  }
}