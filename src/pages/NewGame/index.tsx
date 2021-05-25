import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Cart from '../../components/Cart';
import Footer from '../../components/Footer';
import { Button } from '../../components/GameButton/styles';
import Header from '../../components/Header';
import { selectGame } from '../../modules/games/actions';
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

export interface IGame {
  color: string;
  type: string;
  range: number;
  description: string;
}

const NewGame: React.FC = () => {
  const dispatch = useDispatch();
  const games: IGame[] = useSelector(
    (state: RootStateOrAny) => state.games.results
  );
  const selectedGame: IGame = useSelector(
    (state: RootStateOrAny) => state.games.selected
  );

  console.log(games);

  useEffect(() => {
    dispatch(selectGame(games[0]));
  }, [dispatch, games]);

  const handleSelectGame = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selected: IGame = games.filter(
      (game) => game['type'] === event!.currentTarget.name
    )[0];

    dispatch(selectGame(selected));
  };

  const handleSelectNumber = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget);
  };

  let numbers: number[] = [];

  for (let i = 0; i <= selectedGame.range; i++) {
    numbers = [...numbers, i];
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
          <RegularParagraph>{selectedGame.description}</RegularParagraph>
          <NumbersContainer>
            {numbers.map((number) => {
              return (
                <NumberCell onClick={handleSelectNumber}>{number}</NumberCell>
              );
            })}
          </NumbersContainer>
        </NewBetContainer>
        <Cart />
      </ContentContainer>
      <Footer />
    </Container>
  );
};

export default NewGame;
