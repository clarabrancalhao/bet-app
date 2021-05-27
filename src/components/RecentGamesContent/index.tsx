import React from 'react';
import RecentGameCard from '../RecentGameCard';
import { HiOutlineArrowRight } from 'react-icons/hi';
import {
  Container,
  Container3,
  Header,
  NewGameButton,
  Text1,
  Title,
} from './styles';
import { Button } from '../GameButton/styles';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

interface IGame {
  color: string;
  type: string;
}

const RecentGamesContent = () => {
  const history = useHistory();
  const games = useSelector((state: RootStateOrAny) => state.games.results);

  return (
    <Container>
      <Header>
        <Container3>
          <Title>RECENT GAMES</Title>
          <Text1>Filters</Text1>
          {games.map((game: IGame) => {
            return (
              <Button key={game.type} color={game.color}>
                {game.type}
              </Button>
            );
          })}
        </Container3>
        <NewGameButton
          onClick={() => {
            history.push('/new-bet');
          }}>
          New Game <HiOutlineArrowRight size={48} color="#B5C401" />
        </NewGameButton>
      </Header>
      <RecentGameCard />
    </Container>
  );
};

export default RecentGamesContent;
