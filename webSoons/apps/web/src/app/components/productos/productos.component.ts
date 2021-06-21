import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/firebase/login.service';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'Soons-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {}

}
