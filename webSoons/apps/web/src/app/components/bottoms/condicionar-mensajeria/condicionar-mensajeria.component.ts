import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { FormGroupsModule } from '@Soons/form-group';
import { MensajeriasAceptadas } from '@Soons/models';

@Component({
  selector: 'Soons-condicionar-mensajeria',
  templateUrl: './condicionar-mensajeria.component.html',
  styleUrls: ['./condicionar-mensajeria.component.scss']
})
export class CondicionarMensajeriaComponent implements OnInit {

  mensajeriaCondicional: MensajeriasAceptadas = {administrador: false,compra: false,descuento: false,publicidad: false,stock: false,usuario: 0,venta: true}

  constructor(private _bottomSheetRef: MatBottomSheetRef<CondicionarMensajeriaComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: {mensajeAnterior: MensajeriasAceptadas}, private formGroups: FormGroupsModule) { }

  ngOnInit(): void {
    this._bottomSheetRef.disableClose = true
    if (this.data.mensajeAnterior !== undefined) {
      this.mensajeriaCondicional = this.data.mensajeAnterior

      this.publicidad.setValue(this.mensajeriaCondicional.publicidad)
      this.venta.setValue(this.mensajeriaCondicional.venta)
      this.compra.setValue(this.mensajeriaCondicional.compra)
      this.administrador.setValue(this.mensajeriaCondicional.administrador)
      this.descuento.setValue(this.mensajeriaCondicional.descuento)
      this.stock.setValue(this.mensajeriaCondicional.stock)
    }
  }

  guardarCambios() {
    this.mensajeriaCondicional.usuario = null
    this.mensajeriaCondicional.publicidad = this.publicidad_value.checked === undefined ? this.publicidad_value : this.publicidad_value.checked
    this.mensajeriaCondicional.venta = this.venta_value.checked === undefined ? this.venta_value : this.venta_value.checked
    this.mensajeriaCondicional.compra = this.compra_value.checked === undefined ? this.compra_value : this.compra_value.checked
    this.mensajeriaCondicional.administrador = this.administrador_value.checked === undefined ? this.administrador_value : this.administrador_value.checked
    this.mensajeriaCondicional.descuento = this.descuento_value.checked === undefined ? this.descuento_value : this.descuento_value.checked
    this.mensajeriaCondicional.stock = this.stock_value.checked === undefined ? this.stock_value : this.stock_value.checked
    this._bottomSheetRef.dismiss({mensajeriaCondicional:this.mensajeriaCondicional})
  }

    get condicionesMensajeForm() { return this.formGroups.condicionesMensajeForm }

    get publicidad() { return this.condicionesMensajeForm.get('publicidad') }
    get publicidad_value() { return this.condicionesMensajeForm.value.publicidad }

    get venta() { return this.condicionesMensajeForm.get('venta') }
    get venta_value() { return this.condicionesMensajeForm.value.venta }

    get compra() { return this.condicionesMensajeForm.get('compra') }
    get compra_value() { return this.condicionesMensajeForm.value.compra }

    get administrador() { return this.condicionesMensajeForm.get('administrador') }
    get administrador_value() { return this.condicionesMensajeForm.value.administrador }

    get descuento() { return this.condicionesMensajeForm.get('descuento') }
    get descuento_value() { return this.condicionesMensajeForm.value.descuento }

    get stock() { return this.condicionesMensajeForm.get('stock') }
    get stock_value() { return this.condicionesMensajeForm.value.stock }


}
