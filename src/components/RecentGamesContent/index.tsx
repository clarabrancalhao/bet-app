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

import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ICartGame } from '../../utils/interfaces';
import SelectGameCard from '../SelectGameCard';
import { useEffect } from 'react';
import { getCompletedGames } from '../../modules/cart/actions';

const RecentGamesContent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const boughtGames: ICartGame[] = useSelector(
    (state: RootStateOrAny) => state.cart.completedGames
  );

  useEffect(() => {
    dispatch(getCompletedGames());
  }, [dispatch]);

  console.log(boughtGames);
  return (
    <Container>
      <Header>
        <Container3>
          <Title>RECENT GAMES</Title>
          <Text1>Filters</Text1>
          <SelectGameCard />
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
