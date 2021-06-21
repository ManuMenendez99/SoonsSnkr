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
    keepSesion: new FormControl({ value: true })
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

  postRegistroForm = new FormGroup({
    nombre: new FormControl(null, [Validators.required]),
    apellidos: new FormControl(null, [Validators.required, CustomValidators.patternValidator(/([\D]+\s)+[\D]+/, { isDoubleSurname: true })]),
    fechaNacimiento: new FormControl(null, [Validators.required]),
    telefono: new FormControl(null, [Validators.required]),
    preferencias: new FormControl({ value: 1 }, [Validators.required]),
    role: new FormControl({ value: 1, disabled: true }),
    LGPD: new FormControl(false, [Validators.requiredTrue]),
    keepSesion: new FormControl({ value: true }),
    mensajeria: new FormControl({ checked: true, indeterminate: false })
  })

  crearDireccionForm = new FormGroup({
    ciudadId: new FormControl(null, [Validators.required]),
    direccion: new FormControl(null, [Validators.required]),
    codigoPostal: new FormControl(null, CustomValidators.patternValidator(/(?=(?:.*\d)+)/, { digit: true })),
    convertirEnPrincipal: new FormControl({ value: false })
  })

  condicionesMensajeForm = new FormGroup({
    usuario: new FormControl(true),
    publicidad: new FormControl(true),
    venta: new FormControl(true),
    compra: new FormControl(true),
    administrador: new FormControl(true),
    descuento: new FormControl(true),
    stock: new FormControl(true)
  })

  crearMarcaForm = new FormGroup({
    nombre: new FormControl(null, [Validators.required]),
    imagen: new FormControl(null, [Validators.required]),
    descripcion: new FormControl(null)
  })

  formularioBusqueda = new FormGroup({
    buscador: new FormControl(null)
  })

  // chatFormulario = new FormGroup({
  //   texto: new FormControl('')
  // })

  // crearGrupoFormulario = new FormGroup({
  //   nombre: new FormControl(null, [Validators.required]),
  //   descripcion: new FormControl(null),
  //   participantes: new FormControl(null, [Validators.required])
  // })
}

