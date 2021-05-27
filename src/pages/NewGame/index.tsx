import React, { useMemo } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Cart from '../../components/Cart';
import Footer from '../../components/Footer';
import { Button } from '../../components/GameButton/styles';
import Header from '../../components/Header';
import {
  addGameToCart,
  addNumber,
  clearGame,
  completeGame,
  removeNumber,
} from '../../modules/cart/actions';
import { selectGame } from '../../modules/games/actions';
import {
  AddCartButton,
  BoldParagraph,
  BoldTitle,
  BottomButtonContainer,
  Container,
  ContentContainer,
  GameButtons,
  LightTitle,
  NewBetContainer,
  NumberCell,
  NumbersContainer,
  RegularParagraph,
  SelectButtonsContainer,
  TitleContainer,
} from './styles';

export interface IGame {
  color: string;
  type: string;
  range: number;
  price: number;
  description: string;
  'max-number': number;
}

const NewGame: React.FC = () => {
  const dispatch = useDispatch();
  const games: IGame[] = useSelector(
    (state: RootStateOrAny) => state.games.results
  );

  const selectedGame: IGame = useSelector(
    (state: RootStateOrAny) => state.games.selected
  );

  const selectedNumbers: number[] = useSelector(
    (state: RootStateOrAny) => state.cart.numbers
  );

  const handleSelectGame = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selected: IGame | undefined = games.find(
      (game) => game.type === event.currentTarget.name
    );
    if (selectedGame.type !== selected?.type) {
      dispatch(clearGame());
      dispatch(selectGame(selected));
    }
  };

  const handleSelectNumber = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selected = selectedNumbers.length;
    const isSelected = selectedNumbers.find(
      (number: number) => number === +event.currentTarget.value
    );

    if (!isSelected) {
      if (selected < selectedGame['max-number']) {
        dispatch(addNumber(+event.currentTarget.value));
      } else {
        window.alert('testee');
      }
    } else {
      dispatch(removeNumber(+event.currentTarget.value));
    }
  };

  const handleCompleteGame = () => {
    if (selectedNumbers.length === selectedGame['max-number']) {
      return window.alert('Your game is already completed.');
    }

    let randomNumbers: number[] = [...selectedNumbers];

    for (let i = 1; i < selectedGame['max-number']; i) {
      const random = Math.floor(Math.random() * (selectedGame.range - 1)) + 1;
      randomNumbers.push(random);
      const uniqueRandomNumbers = [...Array.from(new Set(randomNumbers))];
      randomNumbers = uniqueRandomNumbers.sort(function (a, b) {
        return a - b;
      });
      i = uniqueRandomNumbers.length;
    }

    dispatch(completeGame(randomNumbers));
  };

  const handleClearGame = () => {
    dispatch(clearGame());
  };

  const handleAddToCart = () => {
    if (selectedNumbers.length === selectedGame['max-number']) {
      dispatch(
        addGameToCart({
          id: Date.now(),
          type: selectedGame.type,
          price: selectedGame.price,
          selectedNumbers: selectedNumbers,
          color: selectedGame.color,
        })
      );
      dispatch(clearGame());
    }
  };

  const numbers = useMemo(
    () => Array.from({ length: selectedGame?.range }, (_, i) => i + 1),
    [selectedGame]
  );

  if (!selectedGame) {
    return null;
  }

  return (
    <Container>
      <Header />
      <ContentContainer>
        <NewBetContainer>
          <TitleContainer>
            <BoldTitle>NEW BET </BoldTitle>
            <LightTitle> FOR {selectedGame.type.toUpperCase()}</LightTitle>
          </TitleContainer>
          <BoldParagraph>Choose a game</BoldParagraph>
          <SelectButtonsContainer>
            {games.map((game: IGame) => {
              return (
                <Button
                  key={game.type}
                  name={game.type}
                  className={selectedGame?.type === game.type ? `active` : ''}
                  color={game.color}
                  onClick={handleSelectGame}>
                  {game.type}
                </Button>
              );
            })}
          </SelectButtonsContainer>
          <BoldParagraph>Fill your bet</BoldParagraph>
          <RegularParagraph>{selectedGame['description']}</RegularParagraph>
          <NumbersContainer>
            {numbers.map((number) => (
              <NumberCell
                key={number}
                value={number}
                color={selectedGame.color}
                className={
                  !selectedNumbers.find(
                    (selected: number) => selected === number
                  )
                    ? ''
                    : 'active'
                }
                onClick={handleSelectNumber}>
                {number < 10 ? '0' + number : number}
              </NumberCell>
            ))}
          </NumbersContainer>
          <BottomButtonContainer>
            <GameButtons onClick={handleCompleteGame}>
              Complete Game
            </GameButtons>
            <GameButtons onClick={handleClearGame}>Clear Game</GameButtons>
            <AddCartButton onClick={handleAddToCart}>Add to Cart</AddCartButton>
          </BottomButtonContainer>
        </NewBetContainer>
        <Cart />
      </ContentContainer>
      <Footer />
    </Container>
  );
};

export default NewGame;
