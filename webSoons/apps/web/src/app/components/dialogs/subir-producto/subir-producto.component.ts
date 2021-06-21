import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'Soons-subir-producto',
  templateUrl: './subir-producto.component.html',
  styleUrls: ['./subir-producto.component.scss']
})
export class SubirProductoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SubirProductoComponent>,
  ) { }

  ngOnInit(): void {
  }

}
