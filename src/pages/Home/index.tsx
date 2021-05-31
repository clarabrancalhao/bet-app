import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RecentGamesContent from '../../components/RecentGamesContent';
import { Container, TopContainer } from './styles';

const Home = () => {
  return (
    <Container>
      <TopContainer>
        <Header />
        <RecentGamesContent />
      </TopContainer>

      <Footer />
    </Container>
  );
};

export default Home;
