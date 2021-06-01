import axios from 'axios';
import { Dispatch } from 'react';
import { ICartGame, IGame } from '../../utils/interfaces';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_NUMBER = 'ADD_NUMBER';
export const REMOVE_NUMBER = 'REMOVE_NUMBER';
export const COMPLETE_GAME = 'COMPLETE_GAME';
export const CLEAR_GAME = 'CLEAR_GAME';
export const SAVE_CART_COMPLETED = 'SAVE_CART_COMPLETED';
export const SAVE_CART_REJECTED = 'SAVE_CART_REJECTED';
export const SAVE_CART_PENDING = 'SAVE_CART_PENDING';
export const GET_GAMES_PENDING = 'GET_GAMES_PENDING';
export const GET_GAMES_COMPLETED = 'GET_GAMES_COMPLETED';
export const GET_GAMES_REJECTED = 'GET_GAMES_REJECTED';

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

export const removeFromCart = (game: any) => ({
  type: REMOVE_FROM_CART,
  payload: game,
});

export const clearGame = () => ({
  type: CLEAR_GAME,
});

export const saveCart = (games: ICartGame[]) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(saveCartPending());
    axios
      .post(
        'https://bet-app-52a85-default-rtdb.firebaseio.com/games.json',
        games,
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(() => dispatch(saveCartCompleted()))
      .catch((error) => dispatch(saveCartReject(error.message)));
  };
};

export const getCompletedGames = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(getGamesPending());
    axios
      .get('https://bet-app-52a85-default-rtdb.firebaseio.com/games.json')
      .then((response) => dispatch(getGamesCompleted(response.data)))
      .catch((error) => dispatch(getGamesReject(error)));
  };
};

const saveCartPending = () => ({
  type: SAVE_CART_PENDING,
});

const saveCartCompleted = () => ({
  type: SAVE_CART_COMPLETED,
});

const saveCartReject = (error: string) => ({
  type: SAVE_CART_REJECTED,
  payload: error,
});

const getGamesPending = () => ({
  type: GET_GAMES_PENDING,
});

const getGamesCompleted = (games: IGame) => ({
  type: GET_GAMES_COMPLETED,
  payload: games,
});

const getGamesReject = (error: string) => ({
  type: GET_GAMES_REJECTED,
  payload: error,
});
