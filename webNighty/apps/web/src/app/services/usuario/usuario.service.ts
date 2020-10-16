import { Injectable } from '@angular/core';
import { Personas, Usuarios } from '@nighty/models';
import { GetterSetterService } from '../getterSetter/getter-setter.service';
import { LoginService } from '../firebase/login.service';
import { BottomsService } from '../bottoms/bottoms.service';
import { APIService } from '../api/api.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private getterSetter: GetterSetterService, private bottomsService: BottomsService, private api: APIService, private toastr: ToastrService) { }

  cambiarFotoUsuario(file: File, usuario: number) {
    this.api.upload(usuario, file, true).subscribe(
      () => {
        this.toastr.info("Foto actualizada")
      },
      err => {
        console.log({error: err, donde: "cambiarFotoUsuario"})
        this.toastr.error("Ha ocurrido un problema al subir su foto de perfil", "Error al subir la foto")
      }
    )
  }

  abrirLgpd() {
    this.bottomsService.abrirLGPD()
  }

}
