export interface IGame {
  color: string;
  type: string;
  range: number;
  price: number;
  description: string;
  'max-number': number;
  'min-cart-value': number;
}

export interface ICartGame {
  id: number;
  price: number;
  color: string;
  type: string;
  selectedNumbers: number[];
  'min-cart-value': number;
}

export interface ILogin {
  isLogged: boolean;
  emailError: boolean;
  passwordError: boolean;
}
