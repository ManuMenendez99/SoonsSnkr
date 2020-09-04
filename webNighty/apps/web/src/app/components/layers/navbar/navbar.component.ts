import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DialogsService } from '../../../services/dialogs/dialogs.service';
import { LoginService } from '../../../services/firebase/login.service';

@Component({
  selector: 'nighty-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public translate: TranslateService, public firebase: LoginService) { }

  ngOnInit(): void {
  }

}
