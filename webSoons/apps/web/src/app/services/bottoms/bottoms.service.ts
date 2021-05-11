import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MensajeriasAceptadas } from '@Soons/models';
import { ComponentType } from 'ngx-toastr';
import { CondicionarMensajeriaComponent } from '../../components/bottoms/condicionar-mensajeria/condicionar-mensajeria.component';
import { CrearMarcaComponent } from '../../components/bottoms/crear-marca/crear-marca.component';
import { ForgotPasswordComponent } from '../../components/bottoms/forgot-password/forgot-password.component';
import { LGPDComponent } from '../../components/bottoms/lgpd/lgpd.component';
import { PopupMessageComponent } from '../../components/bottoms/popup-message/popup-message.component';

@Injectable({
  providedIn: 'root'
})
export class BottomsService {

  constructor(private bottomSheet: MatBottomSheet) { }

  abrirLGPD() {
    return this.abrirBottom(LGPDComponent)
  }

  abrirCondicionarMensajeria(mensajeAnterior?: MensajeriasAceptadas) {
    if (mensajeAnterior !== null) {
      const data = {mensajeAnterior: mensajeAnterior}
      return this.abrirBottom(CondicionarMensajeriaComponent, data)
    } else {
      return this.abrirBottom(CondicionarMensajeriaComponent)
    }
  }

  abrirForgotPassword(email: String) {
    const data = { email: email }
    return this.abrirBottom(ForgotPasswordComponent, data)
  }

  abrirPopup(tipo: "success" | "error" | "warning" | "info", titulo: string, contenido: string, botones: "si - no" | "aceptar" | "guardar - descartar" | "descargar", cancelar: boolean) {
    const data = { tipo: tipo, titulo: titulo, contenido: contenido, botones: botones, cancelar: cancelar }
    return this.abrirBottom(PopupMessageComponent, data)
  }

  abrirCrearMarca() {
    return this.abrirBottom(CrearMarcaComponent)
  }

  private abrirBottom(componente: ComponentType<any>, data?: any) {
    return this.bottomSheet.open(componente, {data: data})
  }
}
