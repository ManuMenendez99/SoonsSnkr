import { Component, OnInit } from '@angular/core';
import { Chats } from '@nighty/models';
import { ChatService } from '../../../services/chat/chat.service';

@Component({
  selector: 'nighty-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor(public chatService: ChatService) { }

  ngOnInit(): void {
  }

  nombre(nombreChat: {id: number, nombre: string}[]) {
    const usuario = this.chatService.usuarioInLog
    return nombreChat.find((x: any) => x.id !== usuario.id).nombre
  }

  seleccionChat(chat: Chats) {
    console.log(chat)
    this.chatService.chatActual = chat
    this.chatService.getMensajes(chat)
  }
}
