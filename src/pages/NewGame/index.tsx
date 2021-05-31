import Cart from '../../components/Cart';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NewBet from '../../components/NewBetContainer';
import { Container, ContentContainer } from './styles';

const NewGame: React.FC = () => {
  return (
    <Container>
      <Header page="new-bet" />
      <ContentContainer>
        <NewBet />
        <Cart />
      </ContentContainer>
      <Footer />
    </Container>
  );
};

export default NewGame;
