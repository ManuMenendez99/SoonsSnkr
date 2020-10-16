import { Component, OnInit, Inject } from '@angular/core';
// tslint:disable: nx-enforce-module-boundaries
import { LoginService } from 'apps/web/src/app/services/firebase/login.service';
import { UsuarioService } from 'apps/web/src/app/services/usuario/usuario.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroupsModule } from '@nighty/form-group';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { PopupService } from 'apps/web/src/app/services/popup/popup.service';
import { Personas, Usuarios } from '@nighty/models';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'nighty-post-registro',
  templateUrl: './post-registro.component.html',
  styleUrls: ['./post-registro.component.scss'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class PostRegistroComponent implements OnInit {

  _isEmailVerified: boolean
  startDate = new Date(1990, 0, 1)

  files = new Array<File>();

  diaHoy = new Date(new Date().setDate(new Date().getDate() - 1))

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
    this.popup.warning("Cerrar creación usuario","Desea cancelar la creación del usuario, este paso es obligatorio, puede intentar hacerlo mas tarde", "aceptar", true).afterDismissed().subscribe(
      (data: any) => {
        if (data === "Aceptar") {
          this.dialogRef.close({resultado: "posponer"})
        }
      }
    )
  }

  validarForm() {
    if (!this._isEmailVerified) {
      return true
    } else {
      return !this.postRegistroFormulario.valid
    }
  }

  enviarFormulario() {
    const usuario: Usuarios = {
      categoria: 1,
      dap: this.dap_value,
      estado: this.estado_value,
      logInWith: this.data.SignInWith,
      persona: null,
      uid: null,
    }
    const persona: Personas = {
      apellidos: this.apellidos_value,
      fechaNacimiento: this.fechaNacimiento_value,
      nombre: this.nombre_value,
    }
    const keepSesion: boolean = this.keepSesion_value
    this.dialogRef.close({resultado: "crear", usuario: usuario, persona: persona, keepSesion: keepSesion, foto: this.archivoFoto_value})
  }

  get isLoggedViaSocial() {
    if ([2, 3, 4].includes(this.data.SignInWith)) {
      return true
    } else {
      return false
    }
  }

  get postRegistroFormulario() { return this.formGroups.postRegistroFormulario }

  get dap() { return this.formGroups.postRegistroFormulario.get('dap') }
  get nombre() { return this.formGroups.postRegistroFormulario.get('nombre') }
  get apellidos() { return this.formGroups.postRegistroFormulario.get('apellidos') }
  get fechaNacimiento() { return this.formGroups.postRegistroFormulario.get('fechaNacimiento') }
  get archivoFoto() { return this.formGroups.postRegistroFormulario.get('archivoFoto') }
  get categoria() { return this.formGroups.postRegistroFormulario.get('categoria') }
  get estado() { return this.formGroups.postRegistroFormulario.get('estado') }
  get LGPD() { return this.formGroups.postRegistroFormulario.get('LGPD') }
  get keepSesion() { return this.formGroups.postRegistroFormulario.get('keepSesion') }

  get dap_value() { return this.formGroups.postRegistroFormulario.value.dap }
  get nombre_value() { return this.formGroups.postRegistroFormulario.value.nombre }
  get apellidos_value() { return this.formGroups.postRegistroFormulario.value.apellidos }
  get fechaNacimiento_value() { return this.formGroups.postRegistroFormulario.value.fechaNacimiento }
  get archivoFoto_value() { return this.formGroups.postRegistroFormulario.value.archivoFoto }
  get categoria_value() { return this.formGroups.postRegistroFormulario.value.categoria }
  get estado_value() { return this.formGroups.postRegistroFormulario.value.estado }
  get LGPD_value() { return this.formGroups.postRegistroFormulario.value.LGPD }
  get keepSesion_value() { return this.formGroups.postRegistroFormulario.value.keepSesion }

}
