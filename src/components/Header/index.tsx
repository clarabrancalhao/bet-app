import { FC } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setUserLogged } from '../../modules/login/actions';
import { BUTTON_THEME } from '../Button/styles';
import Button from '../Button';
import {
  Title,
  TitleWrapper,
  Container,
  Text,
  ContentWrapper,
  Marker,
  Wrapper,
} from './styles';
import { Link } from 'react-router-dom';

interface IProps {
  page: string;
}

const Header: FC<IProps> = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUserLogged(false));
    localStorage.removeItem('token');
  };

  const handleHomeRedirect = () => {
    history.push('/account');
  };

  return (
    <Container>
      <ContentWrapper>
        <Wrapper>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <TitleWrapper>
              <Title>TGL</Title>
              <Marker />
            </TitleWrapper>
          </Link>

          {props.page === 'home' && <Text className="home-page">Home</Text>}
        </Wrapper>
        <Wrapper>
          <Button className={BUTTON_THEME.GHOST} onClick={handleHomeRedirect}>
            <Text>Account</Text>
          </Button>
          <Button className={BUTTON_THEME.GHOST} onClick={handleLogout}>
            <Text>Log out</Text>
            <HiOutlineArrowRight size={24} color="#707070" />
          </Button>
        </Wrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Header;
