import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../modules/games/actions';
import { IGame } from '../../utils/interfaces';
import { Button, BUTTON_THEME } from '../Button/styles';
import { Container } from './styles';

const FilterGames = () => {
  const dispatch = useDispatch();
  const games: IGame[] = useSelector(
    (state: RootStateOrAny) => state.games.results
  );

  const selectedFilter: IGame = useSelector(
    (state: RootStateOrAny) => state.games.selectedFilter
  );

  const handleSelectFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selected: IGame | undefined = games.find(
      (game) => game.type === event.currentTarget.name
    );
    if (selectedFilter?.type !== selected?.type) {
      dispatch(selectFilter(selected));
    } else {
      dispatch(selectFilter(null));
    }
  };

  return (
    <Container>
      {games.map((game: IGame) => {
        return (
          <Button
            key={game.type}
            name={game.type}
            className={
              selectedFilter?.type === game.type
                ? BUTTON_THEME.GAMES_ACTIVE
                : BUTTON_THEME.GAMES
            }
            color={game.color}
            onClick={handleSelectFilter}>
            {game.type}
          </Button>
        );
      })}
    </Container>
  );
};

export default FilterGames;
