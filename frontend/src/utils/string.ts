import { CreditCardName } from "../types";



export class StringUtils extends String {
  static removeSpaces(str: string): string {
    return str.replace(/\s/gm, '');
  }
  static capitalize([first, ...rest]: string[]): string {
    return first.toUpperCase() + rest.map(s => s.toLowerCase()).join('');
  }

  static creditCardNameValidate(str: string): {
    CardNumber: string;
    CardType: CreditCardName | '';
    isValid: boolean;
  } {
    const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    const amexpRegEx = /^(?:3[47][0-9]{13})$/;
    const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

    let isValid = false;
    let CardType: CreditCardName = '';

    if (visaRegEx.test(str)) {
      isValid = true;
      CardType = 'visa';
    } else if (mastercardRegEx.test(str)) {
      isValid = true;
      CardType = 'mastercard';
    } else if (amexpRegEx.test(str)) {
      isValid = true;
      CardType = 'amex';
    } else if (discovRegEx.test(str)) {
      isValid = true;
      CardType = 'discover';
    }

    return {
      CardNumber: str,
      CardType,
      isValid
    }
  }
}
