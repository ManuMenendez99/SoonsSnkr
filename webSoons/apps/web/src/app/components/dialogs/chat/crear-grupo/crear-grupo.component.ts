import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from 'apps/web/src/app/services/chat/chat.service';
// import { Amigos, Personas } from '@Soons/models';
import { FormGroupsModule } from '@Soons/form-group';

@Component({
  selector: 'Soons-crear-grupo',
  templateUrl: './crear-grupo.component.html',
  styleUrls: ['./crear-grupo.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})
export class CrearGrupoComponent implements OnInit {

  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;

  // personas: Personas[];
  // administradores: Array<number> = new Array<number>();

  constructor(
    // public dialogRef: MatDialogRef<CrearGrupoComponent>,
    // public formGroups: FormGroupsModule,
    // @Inject(MAT_DIALOG_DATA) public data: { PersonasAmigos: Personas[], Amigos: Amigos[], Administrador: Personas }
    ) { }

  ngOnInit() {
    // this.personas = this.data.PersonasAmigos
  }

  // amigoBloqueado(personaId: number) {
  //   return this.data.Amigos.find(x => x.amigo === personaId || x.usuario === personaId).bloqueado === true
  // }

  // onKey(value) {
  //   this.personas = this.search(value);
  // }

  // search(value: string) {
  //   let filter = value.toLowerCase();
  //   if (value !== undefined && value !== null && value !== "") {
  //     return this.data.PersonasAmigos.filter(x => (x.nombre.toLowerCase() + " " + x.apellidos.toLocaleLowerCase()).startsWith(filter.toLocaleLowerCase()));
  //   } else {
  //     return this.data.PersonasAmigos
  //   }
  // }

  // personasEnGrupo() {
  //   if (this.participantesValue !== undefined && this.participantesValue !== null) {
  //     return this.data.PersonasAmigos.filter(x => this.participantesValue.includes(x.id))
  //   }
  // }

  // crearGrupo() {
  //   this.dialogRef.close({ administradores: this.administradores, nombre: this.nombreValue, usuarios: this.participantesValue, descripcion: this.descripcionValue })
  // }

  // convertirEnAdministrador(id: number) {
  //   if (!this.administradores.includes(id)) {
  //     this.administradores.push(id)
  //   }
  // }

  // quitarDeAdministrador(id: number) {
  //   if (this.administradores.includes(id)) {
  //     this.administradores.splice(this.administradores.indexOf(id))
  //   }
  // }

  // eliminarDelGrupo(id: number) {
  //   this.participantes.setValue(this.participantesValue.splice(this.participantesValue.indexOf(id)))
  //   this.quitarDeAdministrador(id)
  // }

  // esAdministrador(id: number) {
  //   if (this.administradores.length !== 0) {
  //     return this.administradores.includes(id)
  //   } else {
  //     return false
  //   }
  // }

  // get nombre() { return this.crearGrupoFormulario.get('nombre') }
  // get participantes() { return this.crearGrupoFormulario.get('participantes') }
  // get descripcion() { return this.crearGrupoFormulario.get('descripcion') }

  // get nombreValue() { return this.crearGrupoFormulario.value.nombre }
  // get participantesValue() { return this.crearGrupoFormulario.value.participantes }
  // get descripcionValue() { return this.crearGrupoFormulario.value.descripcion }

  // get crearGrupoFormulario() { return this.formGroups.crearGrupoFormulario }
}