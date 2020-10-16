import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ComponentType } from 'ngx-toastr';
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

  abrirPopup(tipo: "success" | "error" | "warning" | "info", titulo: string, contenido: string, botones: "si - no" | "aceptar" | "guardar - descartar" | "descargar", cancelar: boolean) {
    const data = { tipo: tipo, titulo: titulo, contenido: contenido, botones: botones, cancelar: cancelar }
    return this.abrirBottom(PopupMessageComponent, data)
  }

  private abrirBottom(componente: ComponentType<any>, data?: any) {
    return this.bottomSheet.open(componente, {data: data})
  }
}
