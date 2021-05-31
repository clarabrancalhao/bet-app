import { HiOutlineArrowRight } from 'react-icons/hi';
import { useHistory } from 'react-router';
import { Button, BUTTON_THEME } from '../Button/styles';
import {
  Title,
  TitleContainer,
  Container,
  Text,
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
            className={BUTTON_THEME.GHOST}
            onClick={() => {
              history.push('/');
            }}>
            <Text>Account</Text>
          </Button>
          <Button
            className={BUTTON_THEME.GHOST}
            onClick={() => history.push('/login')}>
            <Text>Log out</Text>
            <HiOutlineArrowRight size={24} color="#707070" />
          </Button>
        </ButtonsContainer>
      </Container2>
    </Container>
  );
};

export default Header;
