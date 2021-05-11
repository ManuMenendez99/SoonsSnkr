import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { LoginService } from '../firebase/login.service';
import { SecurityService } from '../security/security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService implements CanActivate {

  constructor(public router: Router, private security: SecurityService) { }

  canActivate(
    route: ActivatedRouteSnapshot
  ) {
    const categoria = null
    const categoriasEsperadas: string[] = route.data.categoriasEsperadas


    if (this.security.takeSecurityAdmin()) {
      return true
    } else {
      this.router.navigate(['welcome'])
      return false
    }

  }
}

