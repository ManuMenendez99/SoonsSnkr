import { Component, OnInit } from '@angular/core';
import { Chats, usuarioPersona } from '@nighty/models';
import { ChatService } from '../../../services/chat/chat.service';

@Component({
  selector: 'nighty-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {

  constructor(public chatService: ChatService) { }

  ngOnInit(): void {
  }

  nombre() {
    const usuarioPropio = this.chatService.usuario
    if (this.chatService.chatActual !== undefined && this.chatService.chatActual !== null) {

      if (this.chatService.chatActual.tipoChat) {
        // Grupo
        return this.chatService.gruposUsuario.find(x => x.id === this.chatService.chatActual.grupo).nombre
      } else {
        // Persona
        var usuarioPersona: usuarioPersona
        if (this.chatService.chatActual.enviadoPor === usuarioPropio.id) {
          usuarioPersona = this.chatService.usuariosAmigosPersona.find(x => x.id_usuarios === this.chatService.chatActual.receptor)
        } else {
          usuarioPersona = this.chatService.usuariosAmigosPersona.find(x => x.id_usuarios === this.chatService.chatActual.enviadoPor)
        }
        return usuarioPersona.nombre + " " + usuarioPersona.apellidos
      }
    }
  }

}