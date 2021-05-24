import React from 'react';
import {
  Title,
  TitleContainer,
  Container,
  Text,
  Button,
  Container2,
  Marker,
  ButtonsContainer,
} from './styles';

const Header = () => {
  return (
    <Container>
      <Container2>
        <TitleContainer>
          <Title>TGL</Title>
          <Marker />
        </TitleContainer>
        <ButtonsContainer>
          <Button>
            <Text>Account</Text>
          </Button>
          <Button>
            <Text>Log out</Text>
          </Button>
        </ButtonsContainer>
      </Container2>
    </Container>
  );
};

export default Header;
