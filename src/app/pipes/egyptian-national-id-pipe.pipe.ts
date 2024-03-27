import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egyptianNationalIdPipe',
  standalone: true
})
export class EgyptianNationalIdPipePipe implements PipeTransform {

  transform(idNumber: string, datePart: string): string {
    if (!idNumber || idNumber.length !== 14 || !datePart) {
      return 'Invalid ID or date part';
    }

    const year = idNumber.substr(1, 2);
    const month = idNumber.substr(3, 2);
    const day = idNumber.substr(5, 2);

    let birthDate: string;

    switch (datePart) {
      case 'YY':
        birthDate = year;
        break;
      case 'MM':
        birthDate = month;
        break;
      case 'DD':
        birthDate = day;
        break;
      case 'FullDate':
        birthDate = `${day}-${month}-${'19' + year}`;
        break;
      default:
        birthDate = 'Invalid date part';
        break;
    }

    return birthDate;
  }

}
