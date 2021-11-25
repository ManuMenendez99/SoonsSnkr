import { Injectable } from '@angular/core';
import { TagsProducto } from '@Soons/models';
import { GetterSetterService } from '../getterSetter/getter-setter.service';

@Injectable({
  providedIn: 'root'
})
export class TagsProductosService {

  constructor(private getterSetter: GetterSetterService) { }
  
  get getTagsProductos() {
    return this.getterSetter.TagsProducto
  }

  setTagsProductos(tagsProducto: TagsProducto) {

  }

  deleteTagsProductos(tagsProducto: TagsProducto) {

  }
}
