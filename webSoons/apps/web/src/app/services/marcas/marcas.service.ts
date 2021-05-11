import { Injectable } from '@angular/core';
import { APIService } from '../api/api.service';
import { LoginService } from '../firebase/login.service';
import { GetterSetterService } from '../getterSetter/getter-setter.service';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(private getterSetter: GetterSetterService, private api: APIService) { }

  get marcas() {
    return this.getterSetter.Marcas
  }

  subirMarca(nombre: String, descripcion: String, file: File) {
    // primero se sube la imagen
    this.api.upload(JSON.parse(localStorage.getItem("usuario")).id, file, false).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }
}
