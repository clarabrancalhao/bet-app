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
import { ICartGame } from '../../utils/interfaces';

const RecentGamesContent = () => {
  const history = useHistory();
  const games = useSelector((state: RootStateOrAny) => state.games.results);
  const boughtGames: ICartGame[] = useSelector(
    (state: RootStateOrAny) => state.cart.games
  );

  return (
    <Container>
      <Header>
        <Container3>
          <Title>RECENT GAMES</Title>
          <Text1>Filters</Text1>
          {games.map((game: ICartGame) => {
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
      {boughtGames.map((game) => {
        return (
          <RecentGameCard
            key={game.id}
            date={game.id}
            color={game.color}
            type={game.type}
            price={game.price}
            numbers={game.selectedNumbers}
          />
        );
      })}
    </Container>
  );
};

export default RecentGamesContent;
