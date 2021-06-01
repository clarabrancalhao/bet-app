import { useRef } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { ILogin } from '../../utils/interfaces';
import {
  setEmailError,
  setForgetPassword,
  setPasswordError,
} from '../../modules/login/actions';
import {
  Card,
  ContentWrapper,
  ErrorText,
  ForgetPasswordText,
  Input,
  SubmitText,
  Text,
} from './styles';
import { BUTTON_THEME } from '../Button/styles';
import Button from '../Button';
import useValidate from '../../hooks/useValidate';
import { LOGIN_PAGE_LINKS } from '../../utils/constants';
import useAuthenticate from '../../hooks/useAuthenticate';

const LoginCard = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const handleValidation = useValidate();
  const handleAuthentication = useAuthenticate();

  const login: ILogin = useSelector((state: RootStateOrAny) => state.login);
  const loginPage: string = useSelector(
    (state: RootStateOrAny) => state.login.loginPage
  );

  const handleEmailValidation = () => {
    handleValidation(emailRef, 'email', setEmailError);
  };

  const handleEmailError = () => {
    if (login.emailError) {
      handleEmailValidation();
    }
  };

  const handlePasswordValidation = () => {
    handleValidation(passwordRef, 'password', setPasswordError);
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
      const emailValue = emailRef.current!.value;
      const passwordValue = passwordRef.current!.value;

      handleAuthentication(emailValue, passwordValue);
    }
  };

  const handleForgetPasswordPage = () => {
    dispatch(setForgetPassword());
  };

  return (
    <Card>
      <ContentWrapper>
        <Text>Email</Text>
        <Input
          ref={emailRef}
          onBlur={handleEmailValidation}
          onChange={handleEmailError}
        />
      </ContentWrapper>
      {login.emailError && <ErrorText>Please enter a valid email.</ErrorText>}
      {loginPage !== 'forgetPassword' && (
        <ContentWrapper>
          <Text>Password</Text>
          <Input
            ref={passwordRef}
            type="password"
            onBlur={handlePasswordValidation}
            onChange={handlePasswordError}
          />
        </ContentWrapper>
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
        <SubmitText>{LOGIN_PAGE_LINKS[loginPage]}</SubmitText>
      </Button>
    </Card>
  );
};

export default LoginCard;
