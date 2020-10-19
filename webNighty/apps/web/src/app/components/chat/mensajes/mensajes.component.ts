import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Mensajes } from '@nighty/models';
import { ChatService } from '../../../services/chat/chat.service';

@Component({
  selector: 'nighty-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {

  laPrimeraVezAbajo = true
  botonabajo = false

  constructor(public chatService: ChatService) { }

  ngOnInit(): void {

  }

  @HostListener("document:wheel", ["$Event"])
  goDown() {
    const obj = document.getElementById("scrollMe")
    const scrolled = obj.scrollTop === (obj.scrollHeight - obj.offsetHeight)
    if (!scrolled) {
      this.botonabajo = true
    } else {
      this.botonabajo = false
    }
  }

  nombre() {
    const usuarioPropio = this.chatService.usuarioInLog
    if (this.chatService.chatActual !== undefined && this.chatService.chatActual !== null) {

      if (this.chatService.chatActual.tipoChat) {
        // Grupo
        return this.chatService.gruposUsuario.find(x => x.id === this.chatService.chatActual.grupo).nombre
      } else {
        // Persona
        return this.chatService.chatActual.nombreChat.find((x: any) => x.id !== usuarioPropio.id).nombre
      }
    }
  }

  enviarMensaje() {

  }


  mensajeMio(mensaje: Mensajes) {
    return mensaje.emisor.id === this.chatService.usuarioInLog.id
  }

  tieneMensajes() {
    if (this.chatService.chatActual !== null && this.chatService.chatActual !== undefined) {
      if (this.mensajesChat.length !== 0) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  tieneChat() {

    if (this.chatService.chatActual !== null && this.chatService.chatActual !== undefined) {
      return true
    } else {
      return false
    }
  }

  bajarPrimeraVez() {
    if (this.laPrimeraVezAbajo === true) {
      setTimeout(() => {
        this.laPrimeraVezAbajo = false
        this.chatService.scrollBottomMessages()
      }, 30)
    }
  }

  get mensajesChat() { this.bajarPrimeraVez(); return this.chatService.mensajes.filter(x => x.chat === this.chatService.chatActual.id).sort((a, b) => new Date(a.creado).getTime() - new Date(b.creado).getTime()) }
}