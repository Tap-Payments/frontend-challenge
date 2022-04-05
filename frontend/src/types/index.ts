
export interface BalanceInterface {
  balance: number;
}
export interface Modal {
  isOpen: boolean;
}

export type CreditCardName = 'visa' | 'mastercard' | 'amex' | 'discover' | '';

export interface CreditCard {
  cardName: string,
  cardNumber: string,
  cardType: CreditCardName | '',
  expiration: string,
  cvv: string,
}

export interface GlobalState {
  modal: Modal;
  form: {
    showSuccess: boolean;
    creditCard: CreditCard;
  }
}

export interface ServerResponse {
  status: "success" | "failed";
}