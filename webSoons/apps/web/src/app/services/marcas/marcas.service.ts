import { Injectable } from '@angular/core';
import { ImagenesMarcas, Marcas } from '@Soons/models';
import { ToastrService } from 'ngx-toastr';
// import { parse } from 'path';
import { APIService } from '../api/api.service';
import { LoginService } from '../firebase/login.service';
import { GetterSetterService } from '../getterSetter/getter-setter.service';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(private getterSetter: GetterSetterService, private api: APIService, private toastr: ToastrService) { }

  get marcas() {
    return this.getterSetter.Marcas
  }

  subirMarca(nombre: String, descripcion: String, file: File) {
    // primero se sube la imagen
    this.api.upload(JSON.parse(localStorage.getItem("usuario")).id, file, false).subscribe(
      res => {
        const marca: Marcas = { descripcion: descripcion, archivo: Number.parseInt(res["filename"].substring(0, res["filename"].indexOf("~"))), nombre: nombre }
        this.getterSetter.setMarcas(marca)
        this.toastr.info("marca creada con exito, bases actualizadas para incluirla", "Marca creada")
      },
      err => {
        console.log(err)
        this.toastr.error("No se ha podido crear la marca", "Error en la creación")
      }
    )
  }
}
