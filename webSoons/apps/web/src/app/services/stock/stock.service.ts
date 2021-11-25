import { Injectable } from '@angular/core';
import { GetterSetterService } from '../getterSetter/getter-setter.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private getterSetter: GetterSetterService) { }

  get getStock() {
    return this.getterSetter.Stock
  }

  setStock() {

  }

  deleteStock() {

  }
}
