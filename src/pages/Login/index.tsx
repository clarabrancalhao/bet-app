import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { BUTTON_THEME } from '../../components/Button/styles';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import LoginCard from '../../components/LoginCard';
import Title from '../../components/Title';
import { setRegister, setLogIn } from '../../modules/login/actions';
import {
  LoginContentWrapper,
  LoginPageWrapper,
  ContentWrapper,
  SignUpText,
  TitleText,
} from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const loginPage = useSelector(
    (state: RootStateOrAny) => state.login.loginPage
  );

  const handleSingUpPage = () => {
    dispatch(setRegister());
  };

  const handleLoginPage = () => {
    dispatch(setLogIn());
  };

  let cardTitle;
  let buttonFunction;

  if (loginPage === 'register') {
    cardTitle = 'Registration';
    buttonFunction = handleLoginPage;
  }
  if (loginPage === 'forgetPassword') {
    cardTitle = 'Reset Password';
    buttonFunction = handleLoginPage;
  }
  if (loginPage === 'login') {
    cardTitle = 'Authentication';
    buttonFunction = handleSingUpPage;
  }

  return (
    <LoginPageWrapper>
      <ContentWrapper>
        <Title />
        <LoginContentWrapper>
          <TitleText>{cardTitle}</TitleText>
          <LoginCard />
          <Button className={BUTTON_THEME.GHOST} onClick={buttonFunction}>
            <SignUpText>
              {loginPage === 'login' ? 'Sign Up' : 'Back'}
            </SignUpText>
          </Button>
        </LoginContentWrapper>
      </ContentWrapper>
      <Footer />
    </LoginPageWrapper>
  );
};

export default Login;
