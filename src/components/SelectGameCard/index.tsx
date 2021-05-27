import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { clearGame } from '../../modules/cart/actions';
import { selectGame } from '../../modules/games/actions';
import { IGame } from '../../utils/interfaces';
import { Button } from '../GameButton/styles';

import { Container } from './styles';

const SelectGameCard = () => {
  const dispatch = useDispatch();
  const games: IGame[] = useSelector(
    (state: RootStateOrAny) => state.games.results
  );

  const selectedGame: IGame = useSelector(
    (state: RootStateOrAny) => state.games.selected
  );

  const handleSelectGame = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selected: IGame | undefined = games.find(
      (game) => game.type === event.currentTarget.name
    );
    if (selectedGame.type !== selected?.type) {
      dispatch(clearGame());
      dispatch(selectGame(selected));
    }
  };

  return (
    <Container>
      {games.map((game: IGame) => {
        return (
          <Button
            key={game.type}
            name={game.type}
            className={selectedGame?.type === game.type ? `active` : ''}
            color={game.color}
            onClick={handleSelectGame}>
            {game.type}
          </Button>
        );
      })}
    </Container>
  );
};

export default SelectGameCard;
