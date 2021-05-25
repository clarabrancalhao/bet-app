import axios from 'axios';
import { IGame } from '../../pages/NewGame';

export const GET_GAMES_PENDING = 'GET_GAMES_PENDING';
export const GET_GAMES_REJECT = 'GET_GAMES_REJECT';
export const GET_GAMES_FULFILLED = 'GET_GAMES_FULFILLED';
export const SELECT_GAME = 'SELECT_GAME';

interface Game {
  type: string;
  description: string;
  range: number;
  price: number;
  'max-number': number;
  color: string;
  'min-cart-value': number;
}

export const getGames = () => {
  return (dispatch: any) => {
    dispatch(getGamesPending());
    axios
      .get('data.json')
      .then((response) => dispatch(getGamesFulfilled(response.data.types)))
      .catch((error) => dispatch(getGamesReject(error)));
  };
};

export const selectGame = (game: any) => {
  return (dispatch: any) => {
    dispatch(setSelectedGame(game));
  };
};

const setSelectedGame = (game: IGame) => ({
  type: SELECT_GAME,
  payload: game,
});

const getGamesPending = () => ({
  type: GET_GAMES_PENDING,
});

const getGamesFulfilled = (games: Game[]) => ({
  type: GET_GAMES_FULFILLED,
  payload: [...games],
});

const getGamesReject = (error: string) => ({
  type: GET_GAMES_REJECT,
  payload: error,
});
