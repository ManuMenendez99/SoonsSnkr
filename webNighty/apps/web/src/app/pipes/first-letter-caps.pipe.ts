import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterCap'
})
export class FirstLetterCapPipe implements PipeTransform {

  transform(value: string): unknown {
    const primerValor = value.substr(0,1)
    const otrosValores = value.substr(1)

    return primerValor.toLocaleUpperCase()+otrosValores.toLocaleLowerCase();
  }

}
