import React from 'react';
import Footer from '../../components/Footer';
import LoginCard from '../../components/LoginCard';
import Title from '../../components/Title';
import {
  Container,
  Container1,
  LoginContainer,
  SignUpButton,
  TitleText,
} from './styles';

const Login = () => {
  return (
    <Container>
      <Container1>
        <Title />
        <LoginContainer>
          <TitleText>Authentication</TitleText>
          <LoginCard />
          <SignUpButton>Sign Up</SignUpButton>
        </LoginContainer>
      </Container1>
      <Footer />
    </Container>
  );
};

export default Login;
