import { Injectable } from '@angular/core';
import { Personas, Usuarios } from '@nighty/models';
import { GetterSetterService } from '../getterSetter/getter-setter.service';
import { LoginService } from '../firebase/login.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private getterSetter: GetterSetterService) { }

  procedimientoCreacionUsuario(usuario: Usuarios, persona: Personas, keepSesion: boolean) {
    this.createPersona(persona)
    
    setTimeout(() => {
      this.createUsuario(usuario)
    }, 10)
  }

  createPersona(persona: Personas) {
    this.getterSetter.setPersonas(persona)
  }

  createUsuario(usuario: Usuarios) {
    this.getterSetter.setUsuarios(usuario)
  }

}
