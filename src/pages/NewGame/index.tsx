import Cart from '../../components/Cart';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NewBet from '../../components/NewBetContainer';
import { ContentWrapper, NewBetPageWrapper } from './styles';

const NewGame: React.FC = () => {
  return (
    <NewBetPageWrapper>
      <Header page="new-bet" />
      <ContentWrapper>
        <NewBet />
        <Cart />
      </ContentWrapper>
      <Footer />
    </NewBetPageWrapper>
  );
};

export default NewGame;
