import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { ToastrService } from "ngx-toastr";
import { GetterSetterService } from '../getterSetter/getter-setter.service';
import { UsuariosRegistrandose, Usuarios, MotivosInhabilitacion, Emails, Personas, Archivos } from '@nighty/models';
import { DialogsService } from '../dialogs/dialogs.service';
import { APIService } from '../api/api.service';
import { Habilitacion, GoogleUser } from '@nighty/interfaces-sql';
import { DeteccionErrorService } from './deteccion-error.service';
import { SqlProcedure } from "@nighty/interfaces-sql";
import { UsuarioService } from "../usuario/usuario.service";
import { EncriptacionService } from '../encriptacion/encriptacion.service';
import { DatosService } from '../datos/datos.service';

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
    private getterSetter: GetterSetterService,
    private toastr: ToastrService,
    private encriptacion: EncriptacionService,
    private usuario: UsuarioService
  ) {
  }

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
                if (res.length === 0) {
                  this.toastr.warning("Este correo no existe en nuestra base de datos", "Correo no encontrado")
                } else if (res.length > 1) {
                  console.log("Es imposible que esto haya sucedido")
                } else {
                  if (this.validarDatos(res[0]["e_id"])) {
                    if (this.validarDatos(res[0]["ep_id"])) {
                      if (res[0]["ep_orden"] === 1) {
                        // Correo como principal, bien, ahora tenemos que ver si es usuario o solo persona
                        if (this.validarDatos(res[0]["u_id"])) {
                          // Esta es la cuenta de un usuario, vamos a ver si se loggea mediante correo y contraseña 
                          if (res[0]["u_logInWith"] === 1) {
                            // Se loggea mediante correo y contraseña
                            // vamos a ver si la contraseña la acepta o no mediante firebase
                            this.hacerLogin(result, res)
                          } else {
                            // Se loggea mediante social
                            cambiarASocial(res[0]["u_logInWith"], result.usuario.keepSesion)
                          }
                        } else {
                          // Esta es la cuenta de una persona solo
                          usuarioNoExiste()
                        }
                      } else {
                        // El correo no esta como principal
                        correoNoPrincipal()
                      }
                    } else if (this.validarDatos(res[0]["ur_id"])) {
                      if (res[0]["ur_logInWith"] === 1) {
                        this.postRegistro(res[0]["ur_logInWith"], result.usuario.keepSesion, { email: res[0]["e_email"], contrasena: res[0]["ur_contrasena"] })
                      } else {
                        this.toastr.warning("Este correo esta asociado al inicio de sesión mediante " + (res[0]["ur_logInWith"] === 2 ? 'Google' : res[0]["ur_logInWith"] === 2 ? 'Facebook' : res[0]["ur_logInWith"] === 3 ? 'Twitter' : 'ERROR'))
                      }
                    }
                  } else {
                    correoParaLocal()
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
    firebase.auth().signInWithEmailAndPassword(result.usuario.correo, this.encriptacion.Encriptacion(result.usuario.password)).then(
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
        const error = this.error.detectarError(err.code)
        this.toastr.error(error, "Error en el inicio de sesion")
        console.log("Error en el inicio de sesion de firebase")
        console.log(error)
      }
    )
  }

  postRegistro(logInWith: number, keepSesion: boolean, credentials: { email: string, contrasena: string }) {
    this.dialog.abrirPostRegistro(logInWith).afterClosed().subscribe(
      (data: { resultado: "crear" | "posponer", usuario?: Usuarios, persona?: Personas, keepSesion: boolean, foto: File }) => {
        if (data.resultado === "posponer") {
          this.toastr.info("Creación del usuario pospuesta")
        } else {
          keepSesion = data.keepSesion
          this.loginAtemporal(data.usuario, data.persona, logInWith, keepSesion, data.foto, credentials)
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
                          if (social === usuariosPulido.logInWith) {
                            if (keepSesion) {
                              localStorage.setItem("usuario", JSON.stringify(usuariosPulido))
                            }
                            this.usuarioLogged = usuariosPulido
                            this.toastr.success("Has iniciado sesión", "Contraseña correcta")
                          } else {
                            this.logout(false)
                            this.toastr.warning("Este correo esta asociado al inicio de sesión mediante " + (usuariosPulido.logInWith === 2 ? 'Google' : usuariosPulido.logInWith === 3 ? 'Facebook' : usuariosPulido.logInWith === 4 ? 'Twitter' : usuariosPulido.logInWith === 1 ? "correo y contraseña" : 'ERROR'))

                          }
                        } else {
                          this.hacerRegisterSocial(this.firebaseUser.email, social, keepSesion, null)
                        }
                      },
                      err => {
                        this.errorEnGetterAndSetter(err, "Usuarios")
                        this.logout()
                      }
                    )
                  } else {
                    this.hacerRegisterSocial(this.firebaseUser.email, social, keepSesion, null)
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
                      this.dialog.abrirPostRegistro(social).afterClosed().subscribe(
                        (data: { resultado: "crear" | "posponer", usuario: Usuarios, persona: Personas, foto: File }) => {
                          if (data.resultado === "posponer") {
                            this.toastr.info("Creación del usuario pospuesta")
                          } else {
                            this.loginAtemporal(data.usuario, data.persona, social, keepSesion, data.foto)
                          }
                        }
                      )
                    } else {
                      this.toastr.warning("Este correo ya se esta usando para otro usuario")
                      this.logout()
                    }
                  } else {
                    this.hacerRegisterSocial(this.firebaseUser.email, social, keepSesion)
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
        if (err !== "auth/popup-closed-by-user") {
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
                  if (this.validarDatos(res[0]["e_id"])) {
                    if (this.validarDatos(res[0]["ep_id"])) {
                      this.toastr.warning("Esta cuenta ya esta siendo usada para otro usuario", "CUENTA EN USO ")
                    } else if (this.validarDatos(res[0]["ur_id"])) {
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
        this.sendEmailVerification();
        this.firebaseUser = res.user
        this.hacerRegisterSocial(correo, 1, keepSesion, password)
      }
    ).catch(
      err => {
        this.error.detectarError(err)
        console.log(err)
      }
    )
  }

  hacerRegisterSocial(email: string, social: number, keepSesion: boolean, contrasena?: string) {
    this.toastr.success(social === 1 ? "Verifica tu correo electrónico para continuar" : "Completa tus datos para continuar", "CUENTA CREADA")
    this.dialog.abrirPostRegistro(social).afterClosed().subscribe(
      (data: { resultado: "crear" | "posponer", usuario: Usuarios, persona: Personas, file: File }) => {
        if (data.resultado === "posponer") {
          this.toastr.info("Creación del usuario pospuesta")
        } else {
          this.loginAtemporal(data.usuario, data.persona, social, keepSesion, data.file, { email: email, contrasena: this.encriptacion.Encriptacion(contrasena) })
        }
      }
    )
    this.getterSetter.procedureCreateUserAndEmail(email, this.validarDatos(contrasena) ? this.encriptacion.Encriptacion(contrasena) : null, social)
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

  keepSesion(keepSesion: boolean) {
    firebase.auth().setPersistence(keepSesion === true ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.NONE).catch(function (error) {
      this.toastr.error("No permanecera la sesión cuando se cierre la pestaña")
      console.log(error)
    });
  }

  private loginAtemporal(usuario: Usuarios, persona: Personas, social: number, keepSesion: boolean, file: File, credentials?: { email: string, contrasena: string }) {
    if (social === 1) {
      this.keepSesion(keepSesion)
      firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.contrasena).then(
        RESFirebase => {
          this.firebaseUser = RESFirebase.user
          usuario.uid = RESFirebase.user.uid
          this.procedimientoCreacionUsuario(this.firebaseUser, persona, usuario, keepSesion, file, social)
        }
      ).catch(
        err => {
          if (err !== "auth/popup-closed-by-user") {
            const error = this.error.detectarError(err)
            this.toastr.error(error)
          }
        }
      )
    } else {
      this.procedimientoCreacionUsuario(this.firebaseUser, persona, usuario, keepSesion, file, social)
    }


  }

  procedimientoCreacionUsuario(firebaseUser: firebase.User, persona: Personas, usuario: Usuarios, keepSesion: boolean, file: File, social: number) {
    const fecha = new Date()
    const procedure: SqlProcedure = { nombre: "crearUsuario", valores: [firebaseUser.email, persona.nombre, persona.apellidos, persona.fechaNacimiento, usuario.dap, usuario.categoria, firebaseUser.uid, usuario.estado, social, fecha] }
    this.api.doProcedure(procedure).subscribe(
      () => {
        this.toastr.success("Ha entado en su cuenta","Usuario creado")
        this.datos.reiniciarUsuariosRegistrandose = true
        this.datos.reiniciarPersonas = true
        this.datos.reiniciarEmailsPersona = true
        this.datos.reiniciarUsuarios = true
        // Usuarios registrandose
        this.getterSetter.UsuariosRegistrandose.subscribe()
        // personas
        this.getterSetter.Personas.subscribe()
        // emailsPersonas
        this.getterSetter.EmailsPersona.subscribe()
        // usuarios
        this.getterSetter.Usuarios.subscribe(
          RESUsuario => {
            const usuarioEncontrado = RESUsuario.find(x => x.uid === firebaseUser.uid)
            console.log(RESUsuario, usuario, fecha)
            if (keepSesion) {
              localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado))
            }
            this.usuarioLogged = usuarioEncontrado
            if (file !== null && file !== undefined) {
              this.usuario.cambiarFotoUsuario(file, usuarioEncontrado.id)
            } else {
              const direccion = this.firebaseUser.photoURL
              if (this.validarDatos(direccion)) {
                const archivo: Archivos = {
                  codigo: null,
                  extension: null,
                  mime: null,
                  nombre: null,
                  size: null,
                  usuario: usuarioEncontrado.id,
                  archivoFoto: true,
                  direccionOnline: direccion
                }
                this.getterSetter.setArchivos(archivo)
                this.datos.reiniciarArchivos = true
                this.getterSetter.Archivos.subscribe()
              }
            }
          }
        )
      }
    )
  }

  isLogged(): boolean {
    return firebase.auth().currentUser ? true : false
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
    return this.api.get(`select * from existeUsuario where ur_email = "${email}" or e_email = "${email}"`)
  }
}
