import { ICartGame } from '../../utils/interfaces';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_NUMBER = 'ADD_NUMBER';
export const REMOVE_NUMBER = 'REMOVE_NUMBER';
export const COMPLETE_GAME = 'COMPLETE_GAME';
export const CLEAR_GAME = 'CLEAR_GAME';

export const completeGame = (numbers: number[]) => ({
  type: COMPLETE_GAME,
  payload: numbers,
});

export const addNumber = (number: number) => ({
  type: ADD_NUMBER,
  payload: number,
});

export const removeNumber = (number: number) => ({
  type: REMOVE_NUMBER,
  payload: number,
});

export const addGameToCart = (game: ICartGame) => ({
  type: ADD_TO_CART,
  payload: game,
});

export const removeFromCart = (gameId: number) => ({
  type: REMOVE_FROM_CART,
  payload: gameId,
});

export const clearGame = () => ({
  type: CLEAR_GAME,
});
