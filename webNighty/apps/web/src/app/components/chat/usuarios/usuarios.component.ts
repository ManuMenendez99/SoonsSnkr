import { Component, OnInit } from '@angular/core';
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

}
