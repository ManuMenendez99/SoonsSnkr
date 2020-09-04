import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@NgModule({
  imports: [CommonModule]
})
export class FormGroupsModule {
    loginForm = new FormGroup({
        correo: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required]),
        keepSesion: new FormControl(false)
      })
}


// Validators.required,
// CustomValidators.patternValidator(/\d/, { hasNumber: true }),
// CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
// CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
// CustomValidators.patternValidator(/[!@#$%^&*()_+-={};':"|,.<>]/, { hasSpecialCharacters: true }),
// Validators.minLength(8)
