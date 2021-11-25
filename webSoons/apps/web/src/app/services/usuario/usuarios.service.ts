import { Injectable } from '@angular/core';
import { Usuarios } from '@Soons/models';
import { GetterSetterService } from '../getterSetter/getter-setter.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private getterSetter: GetterSetterService) { }

  get getUsuarios() {
    return this.getterSetter.Usuarios
  }

  setUsuarios(usuario: Usuarios) {

  }

  deleteUsuarios(usuario: Usuarios) {

  }
}
