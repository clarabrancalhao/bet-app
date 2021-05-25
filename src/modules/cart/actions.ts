export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_NUMBER = 'ADD_NUMBER';
export const REMOVE_NUMBER = 'REMOVE_NUMBER';

export interface IGame {
  color: string;
  type: string;
  range: number;
  price: number;
}

export const addToCart = (game: IGame) => {
  return (dispatch: any) => {
    dispatch(add(game));
  };
};

export const SelectedNumbers = (number: number) => {
  return (dispatch: any) => {
    dispatch(addNumber(number));
  };
};

export const RemovedNumbers = (number: number) => {
  return (dispatch: any) => {
    dispatch(removeNumber(number));
  };
};

export const addNumber = (number: number) => ({
  type: ADD_NUMBER,
  payload: number,
});

export const removeNumber = (number: number) => ({
  type: REMOVE_NUMBER,
  payload: number,
});

const add = (game: IGame) => ({
  type: ADD_TO_CART,
  payload: game,
});
