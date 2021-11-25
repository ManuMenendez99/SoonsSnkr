import { Injectable } from '@angular/core';
import { Productos } from '@Soons/models';
import { GetterSetterService } from '../getterSetter/getter-setter.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private getterSetter: GetterSetterService) { }

  get getProductos() {
    return this.getterSetter.Productos
  }

  setProductos(producto: Productos) {

  }

  deleteProductos(producto: Productos) {

  }

}
