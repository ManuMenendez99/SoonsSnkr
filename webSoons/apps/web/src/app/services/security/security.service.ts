import { Injectable } from '@angular/core';
import { LoginService } from '../firebase/login.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private firebase: LoginService) { }

  takeSecurity() {

    return this.firebase.isLogged()

  }

  takeSecurityAdmin() {
    return this.firebase.isAdmin()
  }
}
