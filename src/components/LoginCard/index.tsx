import React from 'react';
import {
  Button,
  Card,
  Container,
  ForgetPasswordText,
  Input,
  Text,
} from './styles';

const LoginCard = () => {
  return (
    <Card>
      <Container>
        <Text>Email</Text>
        <Input />
      </Container>
      <Container>
        <Text>Password</Text>
        <Input />
      </Container>
      <ForgetPasswordText>I forget my password</ForgetPasswordText>
      <Button>Login</Button>
    </Card>
  );
};

export default LoginCard;
