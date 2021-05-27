import { HiOutlineArrowRight } from 'react-icons/hi';
import { useHistory } from 'react-router';
import {
  Title,
  TitleContainer,
  Container,
  Text,
  Button,
  Container2,
  Marker,
  ButtonsContainer,
} from './styles';

const Header = () => {
  const history = useHistory();

  return (
    <Container>
      <Container2>
        <TitleContainer>
          <Title>TGL</Title>
          <Marker />
        </TitleContainer>
        <ButtonsContainer>
          <Button
            onClick={() => {
              history.push('/');
            }}>
            <Text>Account</Text>
          </Button>
          <Button onClick={() => history.push('/login')}>
            <Text>Log out</Text>
            <HiOutlineArrowRight size={24} color="#707070" />
          </Button>
        </ButtonsContainer>
      </Container2>
    </Container>
  );
};

export default Header;
