import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Marcas } from '@Soons/models';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../../services/firebase/login.service';
import { GetterSetterService } from '../../../services/getterSetter/getter-setter.service';
import { SecurityService } from '../../../services/security/security.service';

@Component({
  selector: 'Soons-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  marcas: Array<Marcas> = new Array<Marcas>() 

  constructor(public translate: TranslateService, public firebase: LoginService, private security: SecurityService, private getterSetter: GetterSetterService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getMarcas()
  }

  puedeVerlo() {
    return this.security.takeSecurity()
  }

  getMarcas() {
    this.getterSetter.Marcas.subscribe(
      res => {
        this.marcas = new Array<Marcas>()
        this.marcas = res as Marcas[]
      },
      err => {
        this.toastr.error("No se han podido cargar las marcas")
      }
    )
  }
}
