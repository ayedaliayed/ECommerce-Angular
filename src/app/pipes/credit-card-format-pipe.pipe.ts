import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatPipe',
  standalone: true
})
export class CreditCardFormatPipePipe implements PipeTransform {

  transform(value: string): string {
    if (!value || value.length !== 16) {
      return 'Invalid credit card number';
    }

    const formattedNumber = value.replace(/(\d{4})(?=\d)/g, '$1 - ');

    return formattedNumber.trim();
  }

}
