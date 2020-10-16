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

  registerForm = new FormGroup({
    correo: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
      CustomValidators.patternValidator(/(?=(?:.*[A-Z])+)/, { upperCaseLetter: true }),
      CustomValidators.patternValidator(/(?=(?:.*[a-z])+)/, { lowerCaseLetter: true }),
      CustomValidators.patternValidator(/(?=(?:.*\d)+)/, { digit: true }),
      CustomValidators.patternValidator(/(?=(?:.*[!@#$%^&*()\-_=+{};:,<.>])+)/, { characters: true }),
      CustomValidators.patternValidator(/(?!.*(.)\1{3})/, { notRepeatingThreeCharacters: true }),
      CustomValidators.patternValidator(/([A-Za-z0-9!@#$%^&*()\-_=+{};:,<.>]+)/, { onlyAboveCharClassesNoSpaces: true })
    ])
  })

  postRegistroFormulario = new FormGroup({
    dap: new FormControl(null, [Validators.required, Validators.maxLength(9),CustomValidators.patternValidator(/^[XYZ]?([0-9]{7,8})([A-Z])$/, { isValidDap: true})]),
    nombre: new FormControl(null, [Validators.required]),
    apellidos: new FormControl(null, [Validators.required, CustomValidators.patternValidator(/([\D]+\s)+[\D]+/, { isDoubleSurname: true})]),
    fechaNacimiento: new FormControl(null, [Validators.required]),
    archivoFoto: new FormControl(null),
    categoria: new FormControl({value: 1,disabled: true}, [Validators.required]),
    estado: new FormControl(null, [Validators.required]),
    LGPD: new FormControl(false, [Validators.requiredTrue]),
    keepSesion: new FormControl(true)
  })
}

