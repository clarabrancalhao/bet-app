import React, { useRef } from 'react';
import { notify } from '../../utils/notify';
import Button from '../Button';
import { BUTTON_THEME } from '../Button/styles';
import { Card, Input, InputWrapper, Label, Title } from './styles';

const ChangePasswordCard = () => {
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const repeatNewPasswordRef = useRef<HTMLInputElement>(null);
  const newEmailRef = useRef<HTMLInputElement>(null);

  const handleChangePassword = () => {
    if (newPasswordRef.current?.value && repeatNewPasswordRef.current?.value) {
      if (newPasswordRef.current.value === repeatNewPasswordRef.current.value) {
        notify('Success!');
        newPasswordRef.current.value = '';
        repeatNewPasswordRef.current.value = '';
      }
      notify("Passwords don't match");
    }
  };

  return (
    <Card>
      <Title>Account Settings</Title>
      <InputWrapper>
        <Label>New Password</Label>
        <Input ref={newPasswordRef} type="password" />
      </InputWrapper>
      <InputWrapper>
        <Label>Repeat Password</Label>
        <Input ref={repeatNewPasswordRef} type="password" />
      </InputWrapper>
      <Button
        onClick={handleChangePassword}
        className={BUTTON_THEME.GREEN_BORDER}>
        Save new password!
      </Button>
      <InputWrapper>
        <Label>New E-mail</Label>
        <Input ref={newEmailRef} />
      </InputWrapper>
      <Button
        onClick={handleChangePassword}
        className={BUTTON_THEME.GREEN_BORDER}>
        Save new e-mail!
      </Button>
    </Card>
  );
};

export default ChangePasswordCard;
