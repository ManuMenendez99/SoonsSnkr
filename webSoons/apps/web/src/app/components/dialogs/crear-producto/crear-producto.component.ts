import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'Soons-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CrearProductoComponent>,
  ) { }

  ngOnInit(): void {
  }

}
