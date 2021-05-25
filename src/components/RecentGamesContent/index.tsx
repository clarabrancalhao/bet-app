import React from 'react';
import RecentGameCard from '../RecentGameCard';
import { Container, Header, Text1, Title } from './styles';
import { Button } from '../GameButton/styles';
import { RootStateOrAny, useSelector } from 'react-redux';

interface IGame {
  color: string;
  type: string;
}

const RecentGamesContent = () => {
  const games = useSelector((state: RootStateOrAny) => state.games.results);

  return (
    <Container>
      <Header>
        <Title>RECENT GAMES</Title>
        <Text1>Filters</Text1>
        {games.map((game: IGame) => {
          return (
            <Button key={game.type} color={game.color}>
              {game.type}
            </Button>
          );
        })}
      </Header>
      <RecentGameCard />
    </Container>
  );
};

export default RecentGamesContent;
