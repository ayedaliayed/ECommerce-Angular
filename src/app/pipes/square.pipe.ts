import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square',
  standalone: true
})
export class SquarePipe implements PipeTransform {

  transform(value:number,m:number=2) {
    return value*m ;
  }

}
