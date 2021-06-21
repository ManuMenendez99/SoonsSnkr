import { Component, OnInit, Inject } from '@angular/core';
// tslint:disable: nx-enforce-module-boundaries
import { LoginService } from 'apps/web/src/app/services/firebase/login.service';
import { UsuarioService } from 'apps/web/src/app/services/usuario/usuario.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroupsModule } from '@Soons/form-group';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { PopupService } from 'apps/web/src/app/services/popup/popup.service';
import { Usuarios, MensajeriasAceptadas } from '@Soons/models';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'Soons-post-registro',
  templateUrl: './post-registro.component.html',
  styleUrls: ['./post-registro.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class PostRegistroComponent implements OnInit {

  _isEmailVerified: boolean = false;
  startDate = new Date(1990, 0, 1)

  files = new Array<File>();

  diaHoy = new Date(new Date().setDate(new Date().getDate() - 1))

  resultadoMensaje: MensajeriasAceptadas = { administrador: true, compra: true, descuento: true, publicidad: true, stock: true, usuario: null, venta: true, creado: null, id: null, modificado: null }

  constructor(
    private popup: PopupService,
    public usuarioService: UsuarioService,
    public formGroups: FormGroupsModule,
    public dialogRef: MatDialogRef<PostRegistroComponent>,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: { SignInWith: number }
  ) { }

  ngOnInit(): void {
    this.verifyEmail()
  }

  verifyEmail() {
    let currentUser = null
    this.usuarioService
    const intervaloCurrentuser = setInterval(() => {
      currentUser = firebase.auth().currentUser
      if (currentUser !== null && currentUser !== undefined) {
        clearInterval(intervaloCurrentuser)
        const intervaloVerificacionEmail = setInterval(() => {
          currentUser.reload().then(
            () => {
              console.log(firebase.auth().currentUser)
              if (firebase.auth().currentUser.emailVerified) {
                clearInterval(intervaloVerificacionEmail)
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
    }, 500)

  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element)
    }
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

  esImagen(type: String) {
    const posicionSlash = type.indexOf('/')
    const tipo = type.substr(0, posicionSlash)
    return tipo === "image" ? true : false
  }

  cancelarFormularioRegistro() {
    this.popup.warning("Cerrar creación usuario", "Desea cancelar la creación del usuario, este paso es obligatorio, puede intentar hacerlo mas tarde", "aceptar", true).afterDismissed().subscribe(
      (data: any) => {
        if (data === "Aceptar") {
          this.dialogRef.close({ resultado: "posponer" })
        }
      }
    )
  }

  validarForm() {
    if (!this._isEmailVerified) {
      return true
    } else {
      return !this.postRegistroForm.valid
    }
  }

  enviarFormulario() {
    const usuario: Usuarios = {
      apellidos: this.apellidos_value,
      email: firebase.auth().currentUser.email,
      fechaNacimiento: this.fechaNacimiento_value,
      logInWith: this.data.SignInWith,
      nombre: this.nombre_value,
      preferencias: this.preferencias_value,
      telefono: this.telefono_value,
      uid: firebase.auth().currentUser.uid,
      role: 1,
      contrasena: null
    }
    const keepSesion: boolean = this.keepSesion_value
    this.dialogRef.close({ resultado: "crear", usuario: usuario, keepSesion: keepSesion, mensajeriasAceptadas: this.resultadoMensaje })
  }

  get isLoggedViaSocial() {
    if ([2, 3, 4].includes(this.data.SignInWith)) {
      return true
    } else {
      return false
    }
  }

  indeterminadoMensajeria() {
    const resultado = this.resultadoMensajeria();
    if (resultado === "true") {
      return false
    } else if (resultado === "false") {
      return false
    } else {
      return true
    }
  }

  resultadoMensajeria() {
      if (this.validar(this.resultadoMensaje.administrador, true) && this.validar(this.resultadoMensaje.compra, true) && this.validar(this.resultadoMensaje.descuento, true) && this.validar(this.resultadoMensaje.publicidad, true) && this.validar(this.resultadoMensaje.stock, true) && this.validar(this.resultadoMensaje.venta, true)) {
        return "true"
      } else if (this.validar(this.resultadoMensaje.administrador, false) && this.validar(this.resultadoMensaje.compra, false) && this.validar(this.resultadoMensaje.descuento, false) && this.validar(this.resultadoMensaje.publicidad, false) && this.validar(this.resultadoMensaje.stock, false) && this.validar(this.resultadoMensaje.venta, false)) {
        return "false"
      } else {
        return "indeterminate"
      }
  }

  validar(objeto: any, boolean: boolean) {
    if (objeto.checked === undefined) {
      return objeto === boolean
    } else {
      return objeto.checked === boolean
    }
  }

  moverEstadoIndeterminados() {
    this.resultadoMensaje = {
      administrador:this.mensajeria_value,
      compra:this.mensajeria_value,
      venta:this.mensajeria_value,
      descuento:this.mensajeria_value,
      publicidad:this.mensajeria_value,
      stock:this.mensajeria_value,
      usuario: null} 
  }

  condicionarMensajeria() {
    const resultadoMensaje:MensajeriasAceptadas = {
      administrador:this.mensajeria_value,
      compra:this.mensajeria_value,
      venta:this.mensajeria_value,
      descuento:this.mensajeria_value,
      publicidad:this.mensajeria_value,
      stock:this.mensajeria_value,
    usuario: null} 
    this.usuarioService.abrirCondicionarMensajeria(resultadoMensaje).afterDismissed().subscribe(
      (data: { mensajeriaCondicional: MensajeriasAceptadas }) => {
        this.resultadoMensaje = data.mensajeriaCondicional
      }
    )
  }

  get postRegistroForm() { return this.formGroups.postRegistroForm }

  get nombre() { return this.formGroups.postRegistroForm.get('nombre') }
  get nombre_value() { return this.formGroups.postRegistroForm.value.nombre }

  get apellidos() { return this.formGroups.postRegistroForm.get('apellidos') }
  get apellidos_value() { return this.formGroups.postRegistroForm.value.apellidos }

  get fechaNacimiento() { return this.formGroups.postRegistroForm.get('fechaNacimiento') }
  get fechaNacimiento_value() { return this.formGroups.postRegistroForm.value.fechaNacimiento }

  get telefono() { return this.formGroups.postRegistroForm.get('telefono') }
  get telefono_value() { return this.formGroups.postRegistroForm.value.telefono }

  get preferencias() { return this.formGroups.postRegistroForm.get('preferencias') }
  get preferencias_value() { return this.formGroups.postRegistroForm.value.preferencias }

  get role() { return this.formGroups.postRegistroForm.get('role') }
  get role_value() { return this.formGroups.postRegistroForm.value.role }

  get LGPD() { return this.formGroups.postRegistroForm.get('LGPD') }
  get LGPD_value() { return this.formGroups.postRegistroForm.value.LGPD }

  get mensajeria() { return this.formGroups.postRegistroForm.get('mensajeria') }
  get mensajeria_value() { return this.formGroups.postRegistroForm.value.mensajeria }

  get keepSesion() { return this.formGroups.postRegistroForm.get('keepSesion') }
  get keepSesion_value() { return this.formGroups.postRegistroForm.value.keepSesion }

}
