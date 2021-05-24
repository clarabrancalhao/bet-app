import React from 'react';
import RecentGameCard from '../RecentGameCard';
import { Container, Header, Text1, Title } from './styles';
import { Button } from '../GameButton/styles';

const RecentGamesContent = () => {
  return (
    <Container>
      <Header>
        <Title>RECENT GAMES</Title>
        <Text1>Filters</Text1>
        <Button color="#7F3992">Teste</Button>
      </Header>
      <RecentGameCard />
    </Container>
  );
};

export default RecentGamesContent;
