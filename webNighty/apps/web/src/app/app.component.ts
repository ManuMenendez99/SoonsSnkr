import { Component, OnInit, HostListener, Host } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { LoginService } from './services/firebase/login.service';
@Component({
  selector: 'nighty-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  _insideFooter: boolean
  _rutasBorrarNavbar = ['welcome']

  constructor(
    public translate: TranslateService,
    public router: Router,
    public loginService: LoginService
  ) {
    translate.setDefaultLang('es');
    translate.use('es');
  }

  @HostListener("window:scroll", ['$event'])
  ShowFooter($event: Event) {
    const valorDefecto = $event["srcElement"]["children"][0]
    const scrollTop = valorDefecto.scrollTop
    const height = window.outerHeight
    const outerHeight = document.getElementById('tighting').scrollHeight

    if (height + scrollTop > outerHeight + 130) {
      document.body.classList.add('tight')
    } else {
      document.body.classList.remove('tight')
    }
  }

  @HostListener('window:click', ['$event'])
  quitarTight() {
    if (document.body.classList.contains('tight') && !this._insideFooter) {
      document.body.classList.remove('tight')
      const id = 'tighting';
      const yOffset = 34;
      const element = document.getElementById(id);
      const y = element.getBoundingClientRect().height - yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  mostrarBarra() {
    return !this._rutasBorrarNavbar.includes(this.router.url)
  }


  ngOnInit() {
    AOS.init();
    // this.loginService.login()
  }

  
}
