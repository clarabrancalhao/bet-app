import React from 'react';
import Cart from '../../components/Cart';
import Footer from '../../components/Footer';
import { Button } from '../../components/GameButton/styles';
import Header from '../../components/Header';
import {
  BoldParagraph,
  BoldTitle,
  Container,
  ContentContainer,
  LightTitle,
  NewBetContainer,
  NumberCell,
  NumbersContainer,
  RegularParagraph,
  SelectButtonsContainer,
  TitleContainer,
} from './styles';

const NewGame = () => {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <NewBetContainer>
          <TitleContainer>
            <BoldTitle>NEW BET </BoldTitle>
            <LightTitle>FOR MEGASENA</LightTitle>
          </TitleContainer>
          <BoldParagraph>Choose a game</BoldParagraph>
          <SelectButtonsContainer>
            <Button color="#01AC66">Teste1</Button>
            <Button color="#F79C31">teste2</Button>
          </SelectButtonsContainer>
          <BoldParagraph>Fill your bet</BoldParagraph>
          <RegularParagraph>
            Mark as many numbers as you want up to a maximum of 50. Win by
            hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.
          </RegularParagraph>
          <NumbersContainer>
            <NumberCell>1</NumberCell>
            <NumberCell>2</NumberCell>
            <NumberCell>3</NumberCell>
            <NumberCell>4</NumberCell>
            <NumberCell>5</NumberCell>
            <NumberCell>6</NumberCell>
            <NumberCell>7</NumberCell>
            <NumberCell>8</NumberCell>
            <NumberCell>9</NumberCell>
            <NumberCell>1</NumberCell>
            <NumberCell>2</NumberCell>
            <NumberCell>3</NumberCell>
            <NumberCell>4</NumberCell>
            <NumberCell>5</NumberCell>
            <NumberCell>6</NumberCell>
            <NumberCell>7</NumberCell>
            <NumberCell>8</NumberCell>
            <NumberCell>9</NumberCell>
            <NumberCell>1</NumberCell>
            <NumberCell>2</NumberCell>
            <NumberCell>3</NumberCell>
            <NumberCell>4</NumberCell>
            <NumberCell>5</NumberCell>
            <NumberCell>6</NumberCell>
            <NumberCell>7</NumberCell>
            <NumberCell>8</NumberCell>
            <NumberCell>9</NumberCell>
            <NumberCell>1</NumberCell>
            <NumberCell>2</NumberCell>
            <NumberCell>3</NumberCell>
            <NumberCell>4</NumberCell>
            <NumberCell>5</NumberCell>
            <NumberCell>6</NumberCell>
            <NumberCell>7</NumberCell>
            <NumberCell>8</NumberCell>
            <NumberCell>9</NumberCell>
          </NumbersContainer>
        </NewBetContainer>
        <Cart />
      </ContentContainer>
      <Footer />
    </Container>
  );
};

export default NewGame;
