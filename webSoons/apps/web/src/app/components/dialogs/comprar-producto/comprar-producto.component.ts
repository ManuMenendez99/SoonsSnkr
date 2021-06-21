import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Productos } from '@Soons/models';

@Component({
  selector: 'Soons-comprar-producto',
  templateUrl: './comprar-producto.component.html',
  styleUrls: ['./comprar-producto.component.scss']
})
export class ComprarProductoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ComprarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { producto: Productos }
  ) { }

  ngOnInit(): void {
  }

}
