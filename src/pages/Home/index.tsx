import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RecentGamesContent from '../../components/RecentGamesContent';
import { selectFilter } from '../../modules/games/actions';
import { ContentWrapper, TopContentWrapper } from './styles';

const Home = () => {
  const dispatch = useDispatch();

  const handleClearFilter = useCallback(() => {
    dispatch(selectFilter(null));
  }, [dispatch]);

  useEffect(() => {
    return handleClearFilter();
  }, [handleClearFilter]);

  return (
    <ContentWrapper>
      <TopContentWrapper>
        <Header page="home" />
        <RecentGamesContent />
      </TopContentWrapper>
      <Footer />
    </ContentWrapper>
  );
};

export default Home;
