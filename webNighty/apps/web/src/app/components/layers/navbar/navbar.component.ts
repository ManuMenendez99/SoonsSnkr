import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../../../services/firebase/login.service';
import { SecurityService } from '../../../services/security/security.service';

@Component({
  selector: 'nighty-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public translate: TranslateService, public firebase: LoginService, private security: SecurityService) { }

  ngOnInit(): void {
  }

  puedeVerlo() {
    return this.security.takeSecurity()
  }
}
