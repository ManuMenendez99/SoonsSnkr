import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { ToastrService } from "ngx-toastr";
import { GetterSetterService } from '../getterSetter/getter-setter.service';
import { MensajeriasAceptadas, Usuarios } from '@Soons/models';
import { DialogsService } from '../dialogs/dialogs.service';
import { APIService } from '../api/api.service';
import { Habilitacion, GoogleUser } from '@Soons/interfaces-sql';
import { DeteccionErrorService } from './deteccion-error.service';
import { SqlProcedure } from "@Soons/interfaces-sql";
import { UsuarioService } from "../usuario/usuario.service";
import { EncriptacionService } from '../encriptacion/encriptacion.service';
import { DatosService } from '../datos/datos.service';
import { Router } from '@angular/router';
import { BottomsService } from '../bottoms/bottoms.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  firebaseUser: firebase.User
  private usuarioLogged: Usuarios

  constructor(
    private api: APIService,
    private datos: DatosService,
    private error: DeteccionErrorService,
    private dialog: DialogsService,
    private bottom: BottomsService,
    private getterSetter: GetterSetterService,
    private toastr: ToastrService,
    private encriptacion: EncriptacionService,
    private usuario: UsuarioService,
    public router: Router
  ) {
  }

  login() {
    this.dialog.abrirLogin().afterClosed().subscribe(
      (result: any = undefined) => {
        if (result !== undefined) {
          if (result.accion === "forgotPassword") {
            this.bottom.abrirForgotPassword(result.usuario.correo).afterDismissed().subscribe(
              () => {
                this.logout(false)
                
              },
              err => {
                this.logout(false)
              }
            )
          } else if (result.changeDialogAtSignIn) {
            this.register()
          } else if ([2, 3, 4].includes(result.loginWith)) {
            this.loginViaSocial(result.loginWith, result.usuario.keepSesion)
          } else if (result.usuario !== undefined) {
            this.existeUsuario(result.usuario.correo).subscribe(
              (res: Array<any>) => {
                if (res.length === 0) {
                  this.toastr.warning("Este correo no existe en nuestra base de datos", "Correo no encontrado")
                } else if (res.length > 1) {
                  console.log("Es imposible que esto haya sucedido")
                } else {
                  if (this.encriptacion.Encriptacion(result.usuario.password) === res[0]["ur_contrasena"] || this.encriptacion.Encriptacion(result.usuario.password) === res[0]["u_contrasena"]) {
                    if (this.validarDatos(res[0]["u_email"])) {
                      if (res[0]["u_logInWith"] === 1) {
                        // Se loggea mediante correo y contraseña
                        // vamos a ver si la contraseña la acepta o no mediante firebase
                        this.hacerLogin(result, res)
                          } else {
                            // Se loggea mediante social
                            cambiarASocial(res[0]["u_logInWith"], result.usuario.keepSesion)
                          }
                    } else if (this.validarDatos(res[0]["ur_id"])) {
                      if (res[0]["ur_logInWith"] === 1) {
                        this.postRegistro(res[0]["ur_logInWith"], result.usuario.keepSesion, { email: result.usuario.correo, contrasena: this.encriptacion.Encriptacion(result.usuario.password) })
                      } else {
                        this.toastr.warning("Este correo esta asociado al inicio de sesión mediante " + (res[0]["ur_logInWith"] === 2 ? 'Google' : res[0]["ur_logInWith"] === 2 ? 'Facebook' : res[0]["ur_logInWith"] === 3 ? 'Twitter' : 'ERROR'))
                      }
                    }
                  } else {
                    this.toastr.warning("Contraseña incorrecta", "ERROR")
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
                      console.log()
                      break;
                  }
                  this.toastr.warning(mensaje, "Tipo de inicio de sesion INCORRECTO")
                  this.loginViaSocial(social, keepSesion)
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
          }
        }
      }
    )
  }

  hacerLogin(result: any, res: any) {
    this.keepSesion(result.usuario.keepSesion)
    this.getterSetter.ResetPassword.subscribe(
      resResetPassword => {
        this.getterSetter.Usuarios.subscribe(
          resUsuarios => {
            const passwordOriginal = resResetPassword.find(y => y.usuarioId === resUsuarios.find(x => x.email === result.usuario.correo).id).contrasenaOriginal
            firebase.auth().signInWithEmailAndPassword(result.usuario.correo, passwordOriginal).then(
              RESGoogle => {
                this.firebaseUser = RESGoogle.user
                if (this.verifyEmail()) {
                  this.getterSetter.Usuarios.subscribe(
                    RESUsuarios => {
                      const usuarioEncontrado = RESUsuarios.find(x => x.id === res[0]["u_id"])
                      if (result.usuario.keepSesion) {
                        localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado))
                      }
                      this.usuarioLogged = usuarioEncontrado
                    },
                    err => {
                      this.errorEnGetterAndSetter(err, "usuarios")
                    }
                  )
                  this.toastr.success("Has iniciado sesión", "Contraseña correcta")
                } else {
                  this.toastr.warning("El usuario no ha verificado todavía su email")
                }
              }
            ).catch(
              err => {
                if (err.code !== "auth/popup-closed-by-user") {
                  const error = this.error.detectarError(err.code)
                  this.toastr.error(error, "Error en el inicio de sesion")
                  console.log("Error en el inicio de sesion de firebase")
                  console.log(error)
                }
              }
            )
          },
          err => {
            this.toastr.error("Error al obtener las antiguas contraseñas", "ERROR")
            console.log(err)
          }
        )
      },
      err => {
        this.toastr.error("Error al obtener las antiguas contraseñas", "ERROR")
        console.log(err)
      }
    )

  }

  postRegistro(logInWith: number, keepSesion: boolean, credentials: { email: string, contrasena: string }) {
    this.toastr.success(logInWith === 1 ? "Verifica tu correo electrónico para continuar" : "Completa tus datos para continuar", "CUENTA CREADA")
    if (logInWith === 1) {
      this.getterSetter.ResetPassword.subscribe(
        resResetPassword => {
          this.getterSetter.Usuarios.subscribe(
            resUsuarios => {
              const passwordOriginal = resResetPassword.find(y => y.usuarioId === resUsuarios.find(x => x.email === credentials.email).id).contrasenaOriginal
              firebase.auth().signInWithEmailAndPassword(credentials.email,passwordOriginal).then(
                () => {
                  if (!firebase.auth().currentUser.emailVerified) {
                    firebase.auth().currentUser.sendEmailVerification()
                  }
                }
              ).catch(
                err => {
                  if (err.code !== "auth/popup-closed-by-user") {
                    const error = this.error.detectarError(err.code)
                    this.toastr.error(error)
                  }
                }
              )
            },
            err => {
              this.toastr.error("Error al obtener las antiguas contraseñas", "ERROR")
              console.log(err)
            }
          )
        },
        err => {
          this.toastr.error("Error al obtener las antiguas contraseñas", "ERROR")
          console.log(err)
        }
      )
    }
    const dialogo = this.dialog.abrirPostRegistro(logInWith)
    dialogo.afterClosed().subscribe(
      (data: { resultado: "crear" | "posponer", usuario?: Usuarios, keepSesion: boolean, foto: File, mensajeriasAceptadas: MensajeriasAceptadas }) => {
        if (data.resultado === "posponer") {
          this.toastr.info("Creación del usuario pospuesta")
        } else {
          keepSesion = data.keepSesion
          this.loginAtemporal(data.usuario, logInWith, keepSesion, data.foto, data.mensajeriasAceptadas, credentials)
        }
      }
    )
  }

  loginViaSocial(social: number, keepSesion: boolean) {
    let provider = null
    this.keepSesion(keepSesion)
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
        this.firebaseUser = RESSocial.user
        this.getterSetter.Usuarios.subscribe(
          RESUsuarios => {
            const usuarioNecesario = RESUsuarios.find(x => x.email === this.firebaseUser.email)
            if (this.validarDatos(usuarioNecesario)) {
              if (usuarioNecesario.logInWith === social) {
                if (keepSesion) {
                  localStorage.setItem("usuario", JSON.stringify(usuarioNecesario))
                }
                this.usuarioLogged = usuarioNecesario
                this.toastr.success("Has iniciado sesión", "Contraseña correcta")
              } else {
                this.logout(false)
                this.toastr.warning("Este correo esta asociado al inicio de sesión mediante " + (usuarioNecesario.logInWith === 2 ? 'Google' : usuarioNecesario.logInWith === 3 ? 'Facebook' : usuarioNecesario.logInWith === 4 ? 'Twitter' : usuarioNecesario.logInWith === 1 ? "correo y contraseña" : 'ERROR'))
              }
            } else {
              this.getterSetter.UsuariosRegistrandose.subscribe(
                RESUsuariosRegistrandose => {
                  const usuariosRegistrandosePulidos = RESUsuariosRegistrandose.find(x => x.email === this.firebaseUser.email)
                  if (this.validarDatos(usuariosRegistrandosePulidos)) {
                    this.toastr.success("Completa tus datos para continuar", "CUENTA CREADA")
                    this.dialog.abrirPostRegistro(social).afterClosed().subscribe(
                      (data: { resultado: "crear" | "posponer", usuario: Usuarios, foto: File, mensajeriasAceptadas: MensajeriasAceptadas }) => {
                        if (data.resultado === "posponer") {
                          this.toastr.info("Creación del usuario pospuesta")
                        } else {
                          this.loginAtemporal(data.usuario, social, keepSesion, data.foto, data.mensajeriasAceptadas)
                        }
                      }
                    )
                  } else {
                    this.hacerRegisterSocial(this.firebaseUser.email, social, keepSesion)
                  }
                },
                err => {
                  this.errorEnGetterAndSetter(err, "Usuarios Registrandose")
                  this.logout(false)
                }
              )
            }
          },
          err => {
            this.errorEnGetterAndSetter(err, "Usuarios")
            this.logout(false)
            
          }
        )
      }
    ).catch(
      err => {
        if (err.code !== "auth/popup-closed-by-user") {
          const error = this.error.detectarError(err)
          this.toastr.error(error)
        }
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
            this.existeUsuario(result.usuario.correo).subscribe(
              (res: Array<any>) => {
                if (res.length === 0) {
                  this.hacerRegister(result.usuario.correo, result.usuario.password, result.usuario.keepSesion)
                } else {
                    if (this.validarDatos(res[0]["u_email"])) {
                      this.toastr.warning("Esta cuenta ya esta siendo usada para otro usuario", "CUENTA EN USO ")
                    } else if (this.validarDatos(res[0]["ur_email"])) {
                      if (res[0]["ur_logInWith"] === 1) {
                        if (res[0]["ur_contrasena"] === this.encriptacion.Encriptacion(result.usuario.password)) {
                          // la contraseña coincide es decir es el usuario, no vamos a loggearnos con el, pero vamos a decirle un mensaje especial
                          this.toastr.warning("Ya has creado una cuenta con este correo, trata de entrar con ella", "CUENTA YA CREADA")
                        } else {
                          this.toastr.warning("Esta cuenta ya esta siendo usada para otro usuario", "CUENTA EN USO ")
                          // la contraseña no coincide es decir no es el usuario, vamos a devirle que la cuenta ya esta siendo usada
                        }
                      } else {
                        this.toastr.warning("Este correo esta asociado al inicio de sesión mediante " + (res[0]["ur_logInWith"] === 2 ? 'Google' : res[0]["ur_logInWith"] === 2 ? 'Facebook' : res[0]["ur_logInWith"] === 3 ? 'Twitter' : 'ERROR'))
                      }
                    } else {
                      this.hacerRegister(result.usuario.correo, result.usuario.password, result.usuario.keepSesion)
                    }
                }
              }
            )
          }
        }
      }
    )
  }

  hacerRegister(correo: string, password: string, keepSesion: boolean = false) {
    this.keepSesion(keepSesion)
    firebase.auth().createUserWithEmailAndPassword(String(correo), this.encriptacion.Encriptacion(String(password))).then(
      res => {
        this.firebaseUser = res.user
        this.hacerRegisterSocial(correo, 1, keepSesion, password)
        if (!firebase.auth().currentUser.emailVerified) {
          firebase.auth().currentUser.sendEmailVerification()
        }
      }
    ).catch(
      err => {
        if (err.code !== "auth/popup-closed-by-user") {
          this.error.detectarError(err.code)
          console.log(err)
          this.toastr.warning("No se puede iniciar sesión con correo y contraseña","Error de Google")
        }
      }
    )
  }

  hacerRegisterSocial(email: string, social: number, keepSesion: boolean, contrasena?: string) {
    this.toastr.success(social === 1 ? "Verifica tu correo electrónico para continuar" : "Completa tus datos para continuar", "CUENTA CREADA")
    this.dialog.abrirPostRegistro(social).afterClosed().subscribe(
      (data: { resultado: "crear" | "posponer", usuario: Usuarios, file: File, mensajeriasAceptadas: MensajeriasAceptadas }) => {
        if (data.resultado === "posponer") {
          this.toastr.info("Creación del usuario pospuesta")
        } else {
          this.loginAtemporal(data.usuario, social, keepSesion, data.file, data.mensajeriasAceptadas, { email: email, contrasena: this.encriptacion.Encriptacion(contrasena) })
        }
      }
    )
    this.getterSetter.procedureCreateUserAndEmail(email, this.validarDatos(contrasena) ? this.encriptacion.Encriptacion(contrasena) : null, social)
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

  logout(popUp: boolean = true) {
    firebase.auth().signOut().then(() => {
      if (popUp) {
        this.toastr.success("Ha salido de su cuenta ", "Log Out")
      }
    }).catch(function (error) {
      this.toastr.error("No ha salido de su cuenta ", "Log Out")
      console.log(error)
    });;
    localStorage.removeItem('usuario');
    this.usuarioLogged = null
    this.router.navigate(['welcome'])
  }

  verifyEmail() {
    return this.firebaseUser.emailVerified
  }

  eliminacionUsuario() {
    firebase.auth().currentUser.delete().then(function () {
      this.toastr.success("Usuario borrado")
    }).catch(function (error) {
      console.log(error)
      this.toastr.error("No se ha podido borrar el usuario")
    })
  }

  obtencionDatosUsuarioGoogle() {
    const user = firebase.auth().currentUser
    const googleUser: GoogleUser = {
      name: user.displayName,
      photoUrl: user.photoURL,
      uid: user.uid,
      email: user.email
    }
    return googleUser
  }

  keepSesion(keepSesion: boolean) {
    firebase.auth().setPersistence(keepSesion === true ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.NONE).catch(function (error) {
      this.toastr.error("No permanecera la sesión cuando se cierre la pestaña")
      console.log(error)
    });
  }

  private loginAtemporal(usuario: Usuarios, social: number, keepSesion: boolean, file: File, mensajeriasAceptadas: MensajeriasAceptadas, credentials?: { email: string, contrasena: string }) {
    if (social === 1) {
      this.keepSesion(keepSesion)
      this.getterSetter.ResetPassword.subscribe(
        resResetPassword => {
          this.getterSetter.Usuarios.subscribe(
            resUsuarios => {
              const passwordOriginal = resResetPassword.find(y => y.usuarioId === resUsuarios.find(x => x.email === credentials.email).id).contrasenaOriginal
              firebase.auth().signInWithEmailAndPassword(credentials.email, passwordOriginal).then(
                RESFirebase => {
                  this.firebaseUser = RESFirebase.user
                  usuario.uid = RESFirebase.user.uid
                  usuario.contrasena = credentials.contrasena
                  this.procedimientoCreacionUsuario(this.firebaseUser, usuario, keepSesion, file, social, mensajeriasAceptadas)
                }
              ).catch(
                err => {
                  if (err.code !== "auth/popup-closed-by-user") {
                    const error = this.error.detectarError(err.code)
                    this.toastr.error(error)
                  }
                }
              )
            },
            err => {
              this.toastr.error("Error al obtener las antiguas contraseñas", "ERROR")
              console.log(err)
            }
          )
        },
        err => {
          this.toastr.error("Error al obtener las antiguas contraseñas", "ERROR")
          console.log(err)
        }
      )
    } else {
      this.procedimientoCreacionUsuario(this.firebaseUser, usuario, keepSesion, file, social, mensajeriasAceptadas)
    }


  }

  procedimientoCreacionUsuario(firebaseUser: firebase.User, usuario: Usuarios, keepSesion: boolean, file: File, social: number, mensajeriasAceptadas: MensajeriasAceptadas) {
    const fecha = new Date()
    const procedure: SqlProcedure = { nombre: "crearUsuario", valores: [firebaseUser.email, usuario.nombre, usuario.apellidos, usuario.telefono, new Date(usuario.fechaNacimiento), usuario.preferencias, firebaseUser.uid, social, usuario.role, fecha] }
    this.api.doProcedure(procedure).subscribe(
      () => {
        this.toastr.success("Ha entado en su cuenta", "Usuario creado")
        this.datos.reiniciarUsuariosRegistrandose = true
        this.datos.reiniciarUsuarios = true
        // Usuarios registrandose
        
        this.getterSetter.UsuariosRegistrandose.subscribe(() => { }, err => { this.errorEnGetterAndSetter(err, "usuariosRegistrandose") })
        // personas
        // emailsPersonas
        this.getterSetter.Usuarios.subscribe(() => { }, err => { this.errorEnGetterAndSetter(err, "emailsPersona") })
        // usuarios
        this.getterSetter.Usuarios.subscribe(
          RESUsuario => {
            const usuarioEncontrado = RESUsuario.find(x => x.uid === firebaseUser.uid)
            if (keepSesion) {
              localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado))
            }
            this.usuarioLogged = usuarioEncontrado
            mensajeriasAceptadas.usuario = this.usuarioLogged.id
            this.getterSetter.setMensajeriasAceptadas(mensajeriasAceptadas)
          }, err => {
            this.errorEnGetterAndSetter(err, "usuarios")
          }
        )
      }, err => {
        const error = "Error en el procedimiento de creacion de usuario"
        this.toastr.error(error)
        console.log(error + " en BBDD")
        console.log(err)
      }
    )
  }

  isLogged(): boolean {
    return localStorage.getItem("usuario") !== undefined && localStorage.getItem("usuario") !== null ? true : false
  }

  isAdmin(): boolean {
    if (this.isLogged()) {
      return this.UsuarioConectado.role === 2
    } else {
      return false
    }
  }

  get UsuarioConectado() {
    if (this.isLogged()) {
      const usuario = JSON.parse(localStorage.getItem("usuario"))
      if (usuario !== null) {
        this.usuarioLogged = usuario
      } else {
        localStorage.removeItem("usuario")
      }
      return this.usuarioLogged
    }
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
    return this.api.get(`select * from existeUsuario where ur_email = "${email}" or u_email = "${email}"`)
  }
}
