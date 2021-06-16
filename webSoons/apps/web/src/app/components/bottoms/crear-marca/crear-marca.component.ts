import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormGroupsModule } from '@Soons/form-group';
import { MarcasService } from '../../../services/marcas/marcas.service';

@Component({
  selector: 'Soons-crear-marca',
  templateUrl: './crear-marca.component.html',
  styleUrls: ['./crear-marca.component.scss']
})
export class CrearMarcaComponent implements OnInit {

  files = new Array<File>();
  constructor(private formGroups: FormGroupsModule, private marcasService: MarcasService, private _bottomSheetRef: MatBottomSheetRef<CrearMarcaComponent>) { }

  ngOnInit(): void {
  }

  crearMarca() {
    const file = this.files[0];
    const nombre = this.nombre_value
    const descripcion = this.descripcion_value

    this.marcasService.subirMarca(nombre,descripcion,file)

    this._bottomSheetRef.dismiss()
  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element)
    }
  }

  deleteAttachment(i: number) {
    this.files.splice(i)
  }

  get crearMarcaForm() { return this.formGroups.crearMarcaForm }

  get nombre() { return this.crearMarcaForm.get('nombre') }
  get nombre_value() { return this.crearMarcaForm.value.nombre }

  get imagen() { return this.crearMarcaForm.get('imagen') }
  get imagen_value() { return this.crearMarcaForm.value.imagen }

  get descripcion() { return this.crearMarcaForm.get('descripcion') }
  get descripcion_value() { return this.crearMarcaForm.value.descripcion }
}
