import { useRef } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ILogin } from '../../utils/interfaces';
import {
  emailError,
  forgetPasswordPage,
  passwordError,
  userLogin,
} from '../../modules/login/actions';
import {
  Card,
  Container,
  ErrorText,
  ForgetPasswordText,
  Input,
  SubmitText,
  Text,
} from './styles';
import { Button, BUTTON_THEME } from '../Button/styles';
import useValidate from '../../hooks/useValidate';

const LoginCard = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleValidation = useValidate();

  const login: ILogin = useSelector((state: RootStateOrAny) => state.login);
  const loginPage = useSelector(
    (state: RootStateOrAny) => state.login.loginPage
  );

  const handleEmailValidation = () => {
    handleValidation(emailRef, 'email', emailError);
  };

  const handleEmailError = () => {
    if (login.emailError) {
      handleEmailValidation();
    }
  };

  const handlePasswordValidation = () => {
    handleValidation(passwordRef, 'password', passwordError);
  };

  const handlePasswordError = () => {
    if (login.passwordError) {
      handlePasswordValidation();
    }
  };

  const handleLogin = () => {
    handleEmailValidation();
    handlePasswordValidation();

    if (!login.emailError && !login.passwordError) {
      let url;
      if (loginPage === 'register') {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
      }
      if (loginPage === 'login') {
        url =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
      }
      fetch(`${url}AIzaSyBDvRVhhs1CoFEH3t9yuBMshFMY5MD3yI4`, {
        method: 'POST',
        body: JSON.stringify({
          email: emailRef.current?.value,
          password: passwordRef.current?.value,
          returnSecureToken: true,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            res.json().then((data) => {
              console.log(data);
            });
          }
        })
        .then((data) => {
          localStorage.setItem('token', data['idToken']);
          dispatch(userLogin(true));
          history.push('/');
        });
    }
  };

  const handleForgetPasswordPage = () => {
    dispatch(forgetPasswordPage());
  };

  let switchComponentLink;

  if (loginPage === 'forgetPassword') {
    switchComponentLink = 'Send Link';
  }
  if (loginPage === 'login') {
    switchComponentLink = 'Log In';
  }
  if (loginPage === 'register') {
    switchComponentLink = 'Register';
  }

  return (
    <Card>
      <Container>
        <Text>Email</Text>
        <Input
          ref={emailRef}
          onBlur={handleEmailValidation}
          onChange={handleEmailError}
        />
      </Container>
      {login.emailError && <ErrorText>Please enter a valid email.</ErrorText>}
      {loginPage !== 'forgetPassword' && (
        <Container>
          <Text>Password</Text>
          <Input
            ref={passwordRef}
            type="password"
            onBlur={handlePasswordValidation}
            onChange={handlePasswordError}
          />
        </Container>
      )}
      {login.passwordError && (
        <ErrorText>
          Your password must have at least 8 characters, 1 uppercase letter, 1
          lowercase letter and 1 number
        </ErrorText>
      )}
      {loginPage === 'login' && (
        <Button
          className={BUTTON_THEME.GHOST}
          onClick={handleForgetPasswordPage}>
          <ForgetPasswordText>I forget my password</ForgetPasswordText>
        </Button>
      )}
      <Button className={BUTTON_THEME.GHOST} onClick={handleLogin}>
        <SubmitText>{switchComponentLink}</SubmitText>
      </Button>
    </Card>
  );
};

export default LoginCard;
