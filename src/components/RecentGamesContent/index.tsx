import RecentGameCard from '../RecentGameCard';
import { HiOutlineArrowRight } from 'react-icons/hi';
import {
  ArrowIcon,
  Container,
  Container3,
  Header,
  NewGameText,
  Text1,
  Title,
} from './styles';

import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ICartGame } from '../../utils/interfaces';
import { useEffect } from 'react';
import { getCompletedGames } from '../../modules/cart/actions';
import { Button, BUTTON_THEME } from '../Button/styles';
import FilterGames from '../FilterGames';

const RecentGamesContent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const boughtGames: ICartGame[] = useSelector(
    (state: RootStateOrAny) => state.cart.completedGames
  );
  const selectedFilter = useSelector(
    (state: RootStateOrAny) => state.games.selectedFilter
  );

  useEffect(() => {
    dispatch(getCompletedGames());
  }, [dispatch]);

  const filteredGames = selectedFilter
    ? boughtGames.filter((game) => game.type === selectedFilter.type)
    : boughtGames;

  return (
    <Container>
      <Header>
        <Container3>
          <Title>RECENT GAMES</Title>
          <Text1>Filters</Text1>
          <FilterGames />
        </Container3>
        <Button
          className={BUTTON_THEME.GHOST}
          onClick={() => {
            history.push('/new-bet');
          }}>
          <NewGameText>New Game </NewGameText>
          <ArrowIcon />
        </Button>
      </Header>
      {filteredGames.map((game) => {
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
