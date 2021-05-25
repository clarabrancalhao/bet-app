import { ADD_TO_CART } from './actions';

interface IGame {
  name: string;
  numbers: string[];
  price: number;
}

interface IInitialState {
  games: IGame[];
}

interface IAction {
  type: string;
  payload: IGame;
}

const initialState = {
  games: [],
};

function cartReducer(state: IInitialState = initialState, action: IAction) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, games: action.payload };
    default:
      return state;
  }
}

export default cartReducer;
