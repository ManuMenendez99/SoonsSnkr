import { Injectable } from '@angular/core';
import { GetterSetterService } from '../getterSetter/getter-setter.service';

@Injectable({
  providedIn: 'root'
})
export class ArchivosService {

  constructor(private getterSetter: GetterSetterService) { }

  get archivos() {
    return this.getterSetter.Archivos
  }
}
