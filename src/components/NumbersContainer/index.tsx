import React, { useMemo } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import useSelectNumber from '../../hooks/useSelectNumber';
import { IGame } from '../../utils/interfaces';
import { Button, BUTTON_THEME } from '../Button/styles';

import { Wrapper } from './styles';

const NumbersContainer = () => {
  const handleSelectNumber = useSelectNumber();
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

  return (
    <Wrapper>
      {numbers.map((number) => (
        <Button
          key={number}
          value={number}
          color={selectedGame.color}
          className={
            !selectedNumbers?.find((selected: number) => selected === number)
              ? BUTTON_THEME.NUMBER_CELL
              : BUTTON_THEME.NUMBER_CELL_ACTIVE
          }
          onClick={handleSelectNumber}>
          {number < 10 ? '0' + number : number}
        </Button>
      ))}
    </Wrapper>
  );
};

export default NumbersContainer;
