import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gasVolume'
})
export class GasVolumePipe implements PipeTransform {

  transform(value: number, country: string): string {
    let amount = Math.round(value * 100) / 100;
    if (country == 'USA') return amount + 'gal'
    return amount + 'l';
  }
}