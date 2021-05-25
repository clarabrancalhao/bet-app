import { ADD_TO_CART, REMOVE_NUMBER, ADD_NUMBER } from './actions';

interface IGame {
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
      return { ...state, games: action.payload };

    case ADD_NUMBER:
      return { ...state, numbers: [...state.numbers, action.payload] };

    case REMOVE_NUMBER:
      const filtered = state.numbers.filter(
        (number) => number !== action.payload
      );
      return { ...state, numbers: filtered };
    default:
      return state;
  }
}

export default cartReducer;
