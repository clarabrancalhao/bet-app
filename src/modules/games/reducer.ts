import {
  GET_GAMES_FULFILLED,
  GET_GAMES_PENDING,
  GET_GAMES_REJECT,
  SELECT_GAME,
} from './actions';

interface IGame {
  type: string;
  description: string;
  range: number;
  price: number;
  'max-number': number;
  color: string;
  'min-cart-value': number;
}

/* interface IPayload {
  games: IGame[];
  error: string;
  selected: IGame;
} */

interface IInitialState {
  results: IGame[];
  loading: boolean;
  error: string | null;
  selected: IGame | null;
}

/* interface IAction {
  type: string;
  payload: IPayload;
} */

const initialState = {
  results: [],
  loading: false,
  error: null,
  selected: null,
};

function games(state: IInitialState = initialState, action: any) {
  switch (action.type) {
    case GET_GAMES_FULFILLED:
      return {
        results: action.payload,
        loading: false,
        error: null,
        selected: action.payload[0],
      };
    case GET_GAMES_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_GAMES_REJECT:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case SELECT_GAME:
      return {
        ...state,
        selected: action.payload,
      };

    default:
      return state;
  }
}

export default games;
