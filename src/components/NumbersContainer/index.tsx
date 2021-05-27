import React, { useMemo } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { addNumber, removeNumber } from '../../modules/cart/actions';
import { IGame } from '../../utils/interfaces';

import { Container, NumberCell } from './styles';

const NumbersContainer = () => {
  const dispatch = useDispatch();
  const selectedNumbers: number[] = useSelector(
    (state: RootStateOrAny) => state.cart.numbers
  );

  const selectedGame: IGame = useSelector(
    (state: RootStateOrAny) => state.games.selected
  );

  const numbers = useMemo(
    () => Array.from({ length: selectedGame?.range }, (_, i) => i + 1),
    [selectedGame]
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

  return (
    <Container>
      {numbers.map((number) => (
        <NumberCell
          key={number}
          value={number}
          color={selectedGame.color}
          className={
            !selectedNumbers.find((selected: number) => selected === number)
              ? ''
              : 'active'
          }
          onClick={handleSelectNumber}>
          {number < 10 ? '0' + number : number}
        </NumberCell>
      ))}
    </Container>
  );
};

export default NumbersContainer;
