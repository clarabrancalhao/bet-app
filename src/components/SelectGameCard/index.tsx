import React, { FC } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useSelectGame } from '../../hooks/useSelectGame';
import { IGame } from '../../utils/interfaces';
import { BUTTON_THEME } from '../Button/styles';
import Button from '../Button';

import { ContentWrapper } from './styles';

const SelectGameCard: FC<{ type: string }> = (props) => {
  const handleSelect = useSelectGame();
  const games: IGame[] = useSelector(
    (state: RootStateOrAny) => state.games.results
  );

  const selectedGame: IGame = useSelector(
    (state: RootStateOrAny) => state.games.selected
  );
  const selectedFilter: IGame = useSelector(
    (state: RootStateOrAny) => state.games.selectedFilter
  );

  const handleSelectGame = (event: React.MouseEvent<HTMLButtonElement>) => {
    handleSelect(event, props.type);
  };

  const buttonType = props.type === 'filter' ? selectedFilter : selectedGame;

  return (
    <ContentWrapper>
      {games.map((game: IGame) => {
        return (
          <Button
            key={game.type}
            name={game.type}
            className={
              buttonType?.type === game.type
                ? BUTTON_THEME.GAMES_ACTIVE
                : BUTTON_THEME.GAMES
            }
            color={game.color}
            onClick={handleSelectGame}>
            {game.type}
          </Button>
        );
      })}
    </ContentWrapper>
  );
};

export default SelectGameCard;
