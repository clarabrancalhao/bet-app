import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { addNumber, removeNumber } from '../modules/cart/actions';
import { IGame } from '../utils/interfaces';

const useSelectNumber = () => {
  const dispatch = useDispatch();

  const selectedNumbers: number[] = useSelector(
    (state: RootStateOrAny) => state.cart.numbers
  );
  const selectedGame: IGame = useSelector(
    (state: RootStateOrAny) => state.games.selected
  );

  const handleSelectNumber = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selected = selectedNumbers.length;
    const isSelected = selectedNumbers.find(
      (number: number) => number === +event.currentTarget.value
    );

    if (!isSelected) {
      if (selected < selectedGame['max-number']) {
        dispatch(addNumber(+event.currentTarget.value));
      } else {
        window.alert('testee');
      }
    } else {
      dispatch(removeNumber(+event.currentTarget.value));
    }
  };

  return handleSelectNumber;
};

export default useSelectNumber;
