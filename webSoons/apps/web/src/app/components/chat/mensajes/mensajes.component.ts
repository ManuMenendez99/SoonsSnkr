import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroupsModule } from '@Soons/form-group';
// import { Mensajes, MensajesEnviar, UltimaConexionChats } from '@Soons/models';
import { ChatService } from '../../../services/chat/chat.service';

@Component({
  selector: 'Soons-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class MensajesComponent implements OnInit {

  // laPrimeraVezAbajo = true
  // botonabajo = false

  // myplaceHolder: string = 'Escribe algo...';
  constructor(public chatService: ChatService, public formGroups: FormGroupsModule) { }

  ngOnInit(): void {
    // this.chatService.reiniciarUltimasConexiones();
  }

  // @HostListener("document:wheel", ["$Event"])
  // goDown() {
  //   const obj = document.getElementById("scrollMe")
  //   const scrolled = obj.scrollTop === (obj.scrollHeight - obj.offsetHeight)
  //   if (!scrolled) {
  //     this.botonabajo = true
  //   } else {
  //     this.botonabajo = false
  //   }
  // }

  // idMensajeNoLeido(mensajes: Array<Mensajes>) {
  //   if (mensajes !== undefined) {
  //     const idChat = mensajes[0].chat
  //     const ultimaConexion = this.chatService.ultimasConexionesChats.find(y => y.idChat === idChat) !== undefined ? this.chatService.ultimasConexionesChats.find(y => y.idChat === idChat).ultimaConexion : 0
  //     return mensajes.find(x => x.creado >= ultimaConexion) !== undefined ? mensajes.find(x => x.creado >= ultimaConexion).id : 0
  //   }
  // }

  

  // nombre() {
  //   const usuarioPropio = this.chatService.usuarioInLog
  //   if (this.chatService.chatActual !== undefined && this.chatService.chatActual !== null) {

  //     if (this.chatService.chatActual.tipoChat) {
  //       // Grupo
  //       return this.chatService.gruposUsuario.find(x => x.id === this.chatService.chatActual.grupo).nombre
  //     } else {
  //       // Persona
  //       return this.chatService.chatActual.nombreChat.find((x: any) => x.id !== usuarioPropio.id).nombre
  //     }
  //   }
  // }

  // enviarMensaje() {
  //   const usuarioInlog = this.chatService.usuarioInLog
  //   const personaInLog = this.chatService.personaInLog
  //   this.chatService.sacarLayerMensajeNuevo = false;
  //   if (this.textoValue !== undefined && this.textoValue !== null && this.textoValue !== "") {
  //     const chat = this.chatService.chatActual
  //     const mensaje: MensajesEnviar = {
  //       chat: chat.id,
  //       emisor: JSON.stringify({ id: usuarioInlog.id, nombre: personaInLog.nombre + " " + personaInLog.apellidos }),
  //       mensajeHtml: this.textoValue,
  //       orden: new Date().getTime()
  //     }
  //     this.formularioChat.reset()
  //     this.chatService.enviarChat(mensaje)
  //   }
  // }


  // mensajeMio(mensaje: Mensajes) {
  //   return mensaje.emisor.id === this.chatService.usuarioInLog.id
  // }

  // tieneMensajes() {
  //   if (this.chatService.chatActual !== null && this.chatService.chatActual !== undefined) {
  //     if (this.mensajesChatNoRecursivos.length !== 0) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   } else {
  //     return false
  //   }
  // }

  // tieneChat() {
  //   if (this.chatService.chatActual !== null && this.chatService.chatActual !== undefined) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // bajarPrimeraVez() {
  //   if (this.laPrimeraVezAbajo === true) {
  //     this.laPrimeraVezAbajo = false
  //     console.log(this.chatService.tieneMensajesNuevosCargados)
  //     if (this.chatService.tieneMensajesNuevosCargados) {
  //       setTimeout(() => {
  //         this.chatService.scrollNewMessages()
  //       }, 30)
  //     } else {
  //       setTimeout(() => {
  //         this.chatService.scrollBottomMessages()
  //       }, 30)
  //     }
  //   }
  // }



  // checkPlaceHolder() {
  //   if (this.myplaceHolder) {
  //     this.myplaceHolder = null
  //     return;
  //   } else {
  //     this.myplaceHolder = 'Escribe algo...'
  //     return
  //   }
  // }

  // conHora(mensaje: Mensajes) {
  //   var mensajeConHora: String
  //   if (mensaje.mensajeHtml.length > 20) {
  //     mensajeConHora = mensaje.mensajeHtml +
  //       "<div align='right' class='time'>" +
  //       "<time>" +
  //       this.formatearHora(mensaje.creado).toLocaleLowerCase() +
  //       "</time>"
  //     "</div>"
  //   } else {
  //     mensajeConHora = mensaje.mensajeHtml + "&nbsp; &nbsp; &nbsp; " +
  //       this.formatearHora(mensaje.creado).toLocaleLowerCase() +
  //       "</time>"
  //   }
  //   return mensajeConHora
  // }

  // obtenerMensajes(): Array<Mensajes> {
  //   let Mensajes: Array<Mensajes> = this.chatService.mensajes.filter(x => x.chat === this.chatService.chatActual.id).sort((a, b) => new Date(a.creado).getTime() - new Date(b.creado).getTime())
  //   return Mensajes;
  // }

  // formatearHora(hora: Date): String {
  //   const horaFormateada: Date = new Date(hora)
  //   return (horaFormateada.getHours() + ":" + horaFormateada.getUTCMinutes())
  // }

  // sacarMensajeNoLeidos(i:number) {
  //   return i === this.idMensajeNoLeido(this.mensajesChatNoRecursivos) && i !== 0 && this.chatService.sacarLayerMensajeNuevo === true
  // }

  // get texto() { return this.formularioChat.get('texto') }

  // get textoValue() { return this.formularioChat.value.texto }

  // get formularioChat() { return this.formGroups.chatFormulario }

  // get mensajesChat() { this.bajarPrimeraVez(); return this.obtenerMensajes() }

  // get mensajesChatNoRecursivos() { return this.obtenerMensajes() }
}