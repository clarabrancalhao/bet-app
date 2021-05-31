import { FC } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { userLogin } from '../../modules/login/actions';
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

interface IProps {
  page: string;
}

const Header: FC<IProps> = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogin(false));
    localStorage.removeItem('token');
  };

  const handleHomeRedirect = () => {
    history.push('/');
  };

  return (
    <Container>
      <Container2>
        <ButtonsContainer>
          <TitleContainer>
            <Title>TGL</Title>
            <Marker />
          </TitleContainer>
          {props.page === 'home' && <Text className="home-page">Home</Text>}
        </ButtonsContainer>
        <ButtonsContainer>
          <Button className={BUTTON_THEME.GHOST} onClick={handleHomeRedirect}>
            <Text>Account</Text>
          </Button>
          <Button className={BUTTON_THEME.GHOST} onClick={handleLogout}>
            <Text>Log out</Text>
            <HiOutlineArrowRight size={24} color="#707070" />
          </Button>
        </ButtonsContainer>
      </Container2>
    </Container>
  );
};

export default Header;
