import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { ContentContainer } from '../../components/RecentGameCard/styles';
import { BoldTitle, Container, LightTitle, TitleContainer } from './styles';

const NewGame = () => {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <TitleContainer>
          <BoldTitle>NEW BET </BoldTitle>
          <LightTitle>FOR MEGASENA</LightTitle>
        </TitleContainer>
        <h1>testeste</h1>
      </ContentContainer>
      <Footer />
    </Container>
  );
};

export default NewGame;
