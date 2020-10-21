import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroupsModule } from '@nighty/form-group';
import { Mensajes, MensajesEnviar } from '@nighty/models';
import { ChatService } from '../../../services/chat/chat.service';

@Component({
  selector: 'nighty-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class MensajesComponent implements OnInit {

  laPrimeraVezAbajo = true
  botonabajo = false

  myplaceHolder: string = 'Escribe algo...'

  constructor(public chatService: ChatService, public formGroups: FormGroupsModule) { }

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
    const usuarioInlog = this.chatService.usuarioInLog
    const personaInLog = this.chatService.personaInLog
    if (this.textoValue !== undefined && this.textoValue !== null && this.textoValue !== "") {
      const chat = this.chatService.chatActual
      const mensaje: MensajesEnviar = {
        chat: chat.id,
        emisor: JSON.stringify({ id: usuarioInlog.id, nombre: personaInLog.nombre + " " + personaInLog.apellidos }),
        mensajeHtml: this.textoValue,
        orden: new Date().getTime()
      }
      this.formularioChat.reset()
      this.chatService.enviarChat(mensaje)
    } 
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

  checkPlaceHolder() {
    if (this.myplaceHolder) {
      this.myplaceHolder = null
      return;
    } else {
      this.myplaceHolder = 'Escribe algo...'
      return
    }
  }

  get texto() { return this.formularioChat.get('texto') }

  get textoValue() { return this.formularioChat.value.texto }

  get formularioChat() { return this.formGroups.chatFormulario }

  get mensajesChat() { this.bajarPrimeraVez(); return this.chatService.mensajes.filter(x => x.chat === this.chatService.chatActual.id).sort((a, b) => new Date(a.creado).getTime() - new Date(b.creado).getTime()) }
}