import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

    transform(value: number, ...args: string[]): number {
    return value*2;
  }

}
