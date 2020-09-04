import { Injectable } from '@angular/core';
import { Personas, Usuarios } from '@nighty/models';
import { GetterSetterService } from '../getterSetter/getter-setter.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private getterSetter: GetterSetterService) { }

  createPersona(persona: Personas) {
    this.getterSetter.setPersonas(persona)
  }

  createUsuario(usuario: Usuarios) {
    this.getterSetter.setUsuarios(usuario)
  }

}
