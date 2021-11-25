import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Categorias, Marcas, Productos } from '@Soons/models';
import { ProductosService } from '../../../services/productos/productos.service';

@Component({
  selector: 'Soons-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {

  productos: Array<Productos>
  marcas: Array<Marcas>
  categorias: Array<Categorias>

  constructor(
    public dialogRef: MatDialogRef<CrearProductoComponent>,
    private productosService: ProductosService
  
  ) { }

  ngOnInit(): void {
    this.getProductos()
  }

  getProductos() {
    this.productosService.getProductos.subscribe(
      res => {

      }
    )
  }

  getMarcas() {

  }

  getCategorias() {

  }

}
