import games from '../games/reducer';
import {
  ADD_TO_CART,
  REMOVE_NUMBER,
  ADD_NUMBER,
  COMPLETE_GAME,
  CLEAR_GAME,
  REMOVE_FROM_CART,
} from './actions';

interface IGame {
  id: number;
  name: string;
  numbers: string[];
  price: number;
}

interface IInitialState {
  games: IGame[];
  numbers: number[];
}

interface IAction {
  type: string;
  payload: IGame | number;
}

const initialState = {
  games: [],
  numbers: [],
};

function cartReducer(state: IInitialState = initialState, action: IAction) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, games: [...state.games, action.payload] };

    case REMOVE_FROM_CART:
      const filteredGames = state.games.filter(
        (game) => game.id !== action.payload
      );
      return { ...state, games: filteredGames };

    case ADD_NUMBER:
      return { ...state, numbers: [...state.numbers, action.payload] };

    case REMOVE_NUMBER:
      const filtered = state.numbers.filter(
        (number) => number !== action.payload
      );
      return { ...state, numbers: filtered };
    case COMPLETE_GAME:
      return {
        ...state,
        numbers: action.payload,
      };

    case CLEAR_GAME:
      return {
        ...state,
        numbers: [],
      };
    default:
      return state;
  }
}

export default cartReducer;
