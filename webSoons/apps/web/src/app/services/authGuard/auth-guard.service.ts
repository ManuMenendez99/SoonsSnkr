import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { LoginService } from '../firebase/login.service';
import { SecurityService } from '../security/security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router, private security: SecurityService) { }

  canActivate(
    route: ActivatedRouteSnapshot
  ) {
    const categoria = null
    const rolesEsperados: string[] = route.data.rolesEsperados


    if (this.security.takeSecurity()) {
      return true
    } else {
      this.router.navigate(['welcome'])
      return false
    }

  }
}

