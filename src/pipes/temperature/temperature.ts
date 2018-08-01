import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TemperaturePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */

  transform(value: number, type:any):string{
    if (type == 'C')
      return Math.floor((value)) + '°C';
    if (type == 'K')
      return Math.floor((value + 273)) + 'K';
  }
}
