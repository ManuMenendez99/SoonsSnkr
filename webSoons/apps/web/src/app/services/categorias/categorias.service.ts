import { Injectable } from '@angular/core';
import { Categorias } from '@Soons/models';
import { GetterSetterService } from '../getterSetter/getter-setter.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private getterSetter: GetterSetterService) { }

  get getCategorias() {
    return this.getterSetter.Categorias
  }

  setCategorias(categorias: Categorias) {

  }

  deleteCategorias(categorias: Categorias) {

  }
}
