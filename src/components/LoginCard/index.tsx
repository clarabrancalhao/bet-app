import React, { useRef } from 'react';
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
  Button,
  Card,
  Container,
  ErrorText,
  ForgetPasswordButton,
  Input,
  Text,
} from './styles';

const LoginCard = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const login: ILogin = useSelector((state: RootStateOrAny) => state.login);
  const loginPage = useSelector(
    (state: RootStateOrAny) => state.login.loginPage
  );

  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  const handleEmailValidation = () => {
    const isOk = emailRegex.test(emailRef.current!.value.toLowerCase());

    console.log(isOk);

    if (!isOk) {
      dispatch(emailError(true));
    }
    if (isOk) {
      dispatch(emailError(false));
    }
  };

  const handlePasswordValidation = () => {
    const isOk = passwordRegex.test(passwordRef.current!.value);

    if (!isOk) {
      dispatch(passwordError(true));
    }
    if (isOk) {
      dispatch(passwordError(false));
    }
  };

  const handleLogin = () => {
    handleEmailValidation();
    handlePasswordValidation();

    if (!login.emailError && !login.passwordError) {
      dispatch(userLogin(true));
      history.push('/');
    }
  };

  const handleForgetPasswordPage = () => {
    dispatch(forgetPasswordPage());
  };

  let greenLinkText;

  if (loginPage === 'forgetPassword') {
    greenLinkText = 'Send Link';
  }
  if (loginPage === 'login') {
    greenLinkText = 'Log In';
  }
  if (loginPage === 'register') {
    greenLinkText = 'Register';
  }

  return (
    <Card>
      <Container>
        <Text>Email</Text>
        <Input ref={emailRef} onChange={handleEmailValidation} />
      </Container>
      {login.emailError && <ErrorText>Please enter a valid email.</ErrorText>}
      {loginPage !== 'forgetPassword' && (
        <Container>
          <Text>Password</Text>
          <Input ref={passwordRef} onChange={handlePasswordValidation} />
        </Container>
      )}
      {login.passwordError && (
        <ErrorText>
          Your password must have at least 8 caracters, 1 uppercase letter and 1
          number
        </ErrorText>
      )}
      {loginPage === 'login' && (
        <ForgetPasswordButton onClick={handleForgetPasswordPage}>
          I forget my password
        </ForgetPasswordButton>
      )}
      <Button onClick={handleLogin}>{greenLinkText}</Button>
    </Card>
  );
};

export default LoginCard;
