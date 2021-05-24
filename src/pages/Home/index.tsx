import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RecentGamesContent from '../../components/RecentGamesContent';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <Header />
      <RecentGamesContent />
      <Footer />
    </Container>
  );
};

export default Home;
