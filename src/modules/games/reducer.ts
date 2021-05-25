import {
  GET_GAMES_FULFILLED,
  GET_GAMES_PENDING,
  GET_GAMES_REJECT,
} from './actions';

interface IGame {
  name: string;
  numbers: string[];
  price: number;
}

interface IPayload {
  games: IGame[];
  error: string;
}

interface IInitialState {
  results: IGame[];
  loading: boolean;
  error: string | null;
}

interface IAction {
  type: string;
  payload: IPayload;
}

const initialState = {
  results: [],
  loading: false,
  error: null,
};

function games(state: IInitialState = initialState, actions: IAction) {
  switch (actions.type) {
    case GET_GAMES_FULFILLED:
      return {
        results: actions.payload,
        loading: false,
        error: null,
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
        error: actions.payload.error,
      };

    default:
      return state;
  }
}

export default games;
