import { Component, OnInit } from '@angular/core';
// import { Chats, UltimaConexionChats } from '@Soons/models';
import { ChatService } from '../../../services/chat/chat.service';
import { GetterSetterService } from '../../../services/getterSetter/getter-setter.service';

@Component({
  selector: 'Soons-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor(public chatService: ChatService, public getterSetter: GetterSetterService) { }

  ngOnInit(): void {
  }

  // nombre(nombreChat: {id: number, nombre: string}[]) {
  //   const usuario = this.chatService.usuarioInLog
  //   return nombreChat.find((x: any) => x.id !== usuario.id).nombre
  // }

  // seleccionChat(chat: Chats) {
  //   console.log(chat)
  //   this.chatService.chatActual = chat
  //   console.log(chat)
  //   this.chatService.getMensajes(chat)
  //   if (this.chatService.chatActual.id !== null && this.chatService.chatActual.id !== undefined && this.chatService.chatActual.id !== 0) {
  //     this.getterSetter.UltimaConexionChats.subscribe(
  //       res => {
  //         let ultimaConexionChats: UltimaConexionChats = { idChat: this.chatService.chatActual.id, idUsuario: this.chatService.usuarioInLog.id, ultimaConexion: new Date() }
  //         let ultimasConexionesChats = new Array<UltimaConexionChats>();
  //         ultimasConexionesChats = res as UltimaConexionChats[];
  //         if (ultimasConexionesChats.filter(x => x.idChat === this.chatService.chatActual.id && x.idUsuario === this.chatService.usuarioInLog.id).length != 0) {
  //           ultimaConexionChats.id = ultimasConexionesChats.find(x => x.idChat === this.chatService.chatActual.id && x.idUsuario === this.chatService.usuarioInLog.id).id
  //         }
  //         this.getterSetter.setUltimaConexionChats(ultimaConexionChats);
  //       }
  //     )
  //   }
  // }

  // crearGrupo() {
  //   this.chatService.crearGrupo()
  // }
}
