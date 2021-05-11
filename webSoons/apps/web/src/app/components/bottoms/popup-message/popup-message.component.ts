import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'Soons-popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.scss']
})
export class PopupMessageComponent implements OnInit {

  constructor(
    public bottomSheet: MatBottomSheetRef<PopupMessageComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { tipo: "success" | "error" | "warning" | "info", titulo: string, contenido: string, botones: "si - no" | "aceptar" | "guardar - descartar" | "descargar", cancelar: boolean }
  ) { }

  ngOnInit(): void {
  }

  respuesta(valor: "Si" | "No" | "Aceptar" | "Descartar" | "Guardar" | "Cancelar" | "Descargar") {
    this.bottomSheet.dismiss(valor)
  }

}
