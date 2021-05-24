import React from 'react';
import {
  Container,
  ContentContainer,
  Game,
  Infos,
  Marker,
  Numbers,
} from './styles';

const RecentGameCard = () => {
  return (
    <Container>
      <Marker color="#7F3992" />
      <ContentContainer>
        <Numbers>1,2,3,4,5,6,7,8,9</Numbers>
        <Infos>Testeee</Infos>
        <Game color="#7F3992">TesteFacil</Game>
      </ContentContainer>
    </Container>
  );
};

export default RecentGameCard;
