import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';

@Component({
  selector: 'Soons-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    // this.chatService.getGrupos()
    // this.chatService.getAmigos()
  }

}
