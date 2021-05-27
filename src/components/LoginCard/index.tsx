import React, { useRef } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  emailError,
  passwordError,
  userLogin,
} from '../../modules/login/actions';
import {
  Button,
  Card,
  Container,
  ErrorText,
  ForgetPasswordText,
  Input,
  Text,
} from './styles';

interface ILogin {
  isLogged: boolean;
  emailError: boolean;
  passwordError: boolean;
  emailOk: boolean;
  passwordOk: boolean;
}

const LoginCard = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const login: ILogin = useSelector((state: RootStateOrAny) => state.login);

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

  return (
    <Card>
      <Container>
        <Text>Email</Text>
        <Input ref={emailRef} onChange={handleEmailValidation} />
      </Container>
      {login.emailError && <ErrorText>Please enter a valid email.</ErrorText>}
      <Container>
        <Text>Password</Text>
        <Input ref={passwordRef} onChange={handlePasswordValidation} />
      </Container>
      {login.passwordError && (
        <ErrorText>
          Your password must have at least 8 caracters, 1 uppercase letter and 1
          number
        </ErrorText>
      )}
      <ForgetPasswordText>I forget my password</ForgetPasswordText>
      <Button onClick={handleLogin}>Login</Button>
    </Card>
  );
};

export default LoginCard;
