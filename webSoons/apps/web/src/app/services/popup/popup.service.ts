import { Injectable } from '@angular/core';
import { BottomsService } from '../bottoms/bottoms.service';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private bottomService: BottomsService) { }

  info(titulo: string, contenido: string, botones: "si - no" | "aceptar" | "guardar - descartar" | "descargar", cancelar: boolean = false) {
    return this.abrirPopup("info", titulo, contenido, botones, cancelar)
  }

  warning(titulo: string, contenido: string, botones: "si - no" | "aceptar" | "guardar - descartar" | "descargar", cancelar: boolean = false) {
    return this.abrirPopup("warning", titulo, contenido, botones, cancelar)
  }

  error(titulo: string, contenido: string, botones: "si - no" | "aceptar" | "guardar - descartar" | "descargar", cancelar: boolean = false) {
    return this.abrirPopup("error", titulo, contenido, botones, cancelar)
  }

  success(titulo: string, contenido: string, botones: "si - no" | "aceptar" | "guardar - descartar" | "descargar", cancelar: boolean = false) {
    return this.abrirPopup("success", titulo, contenido, botones, cancelar)
  }

  private abrirPopup(tipo: "success" | "error" | "warning" | "info", titulo: string, contenido: string, botones: "si - no" | "aceptar" | "guardar - descartar" | "descargar", cancelar: boolean) {
    return this.bottomService.abrirPopup(tipo, titulo, contenido, botones, cancelar)
  }
}
