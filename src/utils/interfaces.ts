export interface IGame {
  id: number
  color: string
  type: string
  range: number
  price: number
  description: string
  'max-number': number
  'min-cart-value': number
}

export interface ISaveGame {
  game_id: number
  numbers: number[]
}

export interface ICartGame {
  id: string
  game_id: number
  date: number
  price: number
  color: string
  type: string
  selectedNumbers: number[]
  'min-cart-value': number
}

export interface ISavedGame {
  id: string
  game_id: number
  date: number
  price: number
  color: string
  type: string
  numbers: number[]
  'min-cart-value': number
}

export interface ILogin {
  isLogged: boolean
  emailError: boolean
  passwordError: boolean
}
