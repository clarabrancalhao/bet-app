import { useCallback, useEffect, useRef } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import useValidate from '../../hooks/useValidate';
import {
  setEmailError,
  setPasswordError,
  setSecondPasswordError,
} from '../../modules/login/actions';
import { notify } from '../../utils/notify';
import Button from '../Button';
import { BUTTON_THEME } from '../Button/styles';
import { EmailError, NewPasswordError, PasswordError } from '../ErrorMessages';
import { Card, Input, InputWrapper, Label, Title } from './styles';

const AccountSettingsCard = () => {
  const handleValidation = useValidate();
  const dispatch = useDispatch();

  const newPasswordRef = useRef<HTMLInputElement>(null);
  const repeatNewPasswordRef = useRef<HTMLInputElement>(null);
  const newEmailRef = useRef<HTMLInputElement>(null);

  const login = useSelector((state: RootStateOrAny) => state.login);

  const handlePasswordValidation = () => {
    handleValidation(newPasswordRef, 'password', setPasswordError);
  };

  const handlePasswordError = () => {
    if (login.passwordError) {
      handlePasswordValidation();
    }
  };

  const handleEmailValidation = () => {
    handleValidation(newEmailRef, 'email', setEmailError);
  };

  const handleEmailError = () => {
    if (login.emailError) {
      handleEmailValidation();
    }
  };

  const handleSecondPasswordValidation = () => {
    if (newPasswordRef.current?.value !== repeatNewPasswordRef.current?.value) {
      dispatch(setSecondPasswordError(true));
    } else {
      dispatch(setSecondPasswordError(false));
    }
  };

  const handleSecondPasswordError = () => {
    if (login.secondPasswordError) {
      handleSecondPasswordValidation();
    }
  };

  const handleChangePassword = () => {
    if (newPasswordRef.current?.value && repeatNewPasswordRef.current?.value) {
      if (!login.passwordError && !login.secondPasswordError) {
        notify('Success!');
        newPasswordRef.current.value = '';
        repeatNewPasswordRef.current.value = '';
        return;
      }
      notify('Please, check the passwords');
    }
  };

  const handleChangeEmail = () => {
    if (newEmailRef) {
      if (!login.emailError) {
        notify('Success!');
        newEmailRef.current!.value = '';
        return;
      }
      notify('Please, check your e-mail');
    }
  };

  const handleRemoveErrors = useCallback(() => {
    dispatch(setEmailError(false));
    dispatch(setPasswordError(false));
    dispatch(setSecondPasswordError(false));
  }, [dispatch]);

  useEffect(() => {
    return handleRemoveErrors();
  }, [handleRemoveErrors]);

  return (
    <Card>
      <Title>Account Settings</Title>
      <InputWrapper>
        <Label>New Password</Label>
        <Input
          ref={newPasswordRef}
          type="password"
          onBlur={handlePasswordValidation}
          onChange={handlePasswordError}
        />
        {login.passwordError && <PasswordError />}
      </InputWrapper>
      <InputWrapper>
        <Label>Repeat Password</Label>
        <Input
          ref={repeatNewPasswordRef}
          type="password"
          onBlur={handleSecondPasswordValidation}
          onChange={handleSecondPasswordError}
        />
        {login.secondPasswordError && <NewPasswordError />}
      </InputWrapper>
      <Button
        onClick={handleChangePassword}
        className={BUTTON_THEME.GREEN_BORDER}>
        Save new password!
      </Button>
      <InputWrapper>
        <Label>New E-mail</Label>
        <Input
          ref={newEmailRef}
          onBlur={handleEmailValidation}
          onChange={handleEmailError}
        />
        {login.emailError && <EmailError />}
      </InputWrapper>
      <Button onClick={handleChangeEmail} className={BUTTON_THEME.GREEN_BORDER}>
        Save new e-mail!
      </Button>
    </Card>
  );
};

export default AccountSettingsCard;
