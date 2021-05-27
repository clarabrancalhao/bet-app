import { IGame } from '../../utils/interfaces';
import {
  NewBetContainer,
  TitleContainer,
  BottomButtonContainer,
  BoldParagraph,
  BoldTitle,
  GameButtons,
  AddCartButton,
  LightTitle,
  RegularParagraph,
} from './styles';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {
  addGameToCart,
  clearGame,
  completeGame,
} from '../../modules/cart/actions';
import getRandomNumbers from '../../utils/getRandomNumbers';
import NumbersContainer from '../NumbersContainer';
import SelectGameCard from '../SelectGameCard';

const NewBet = () => {
  const dispatch = useDispatch();

  const selectedGame: IGame = useSelector(
    (state: RootStateOrAny) => state.games.selected
  );

  const selectedNumbers: number[] = useSelector(
    (state: RootStateOrAny) => state.cart.numbers
  );

  const handleCompleteGame = () => {
    if (selectedNumbers.length === selectedGame['max-number']) {
      return window.alert('Your game is already completed.');
    }

    const randomNumbers = getRandomNumbers(selectedGame, selectedNumbers);

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

  if (!selectedGame) {
    return null;
  }
  return (
    <NewBetContainer>
      <TitleContainer>
        <BoldTitle>NEW BET </BoldTitle>
        <LightTitle> FOR {selectedGame.type.toUpperCase()}</LightTitle>
      </TitleContainer>
      <BoldParagraph>Choose a game</BoldParagraph>
      <SelectGameCard />
      <BoldParagraph>Fill your bet</BoldParagraph>
      <RegularParagraph>{selectedGame['description']}</RegularParagraph>
      <NumbersContainer />
      <BottomButtonContainer>
        <GameButtons onClick={handleCompleteGame}>Complete Game</GameButtons>
        <GameButtons onClick={handleClearGame}>Clear Game</GameButtons>
        <AddCartButton onClick={handleAddToCart}>Add to Cart</AddCartButton>
      </BottomButtonContainer>
    </NewBetContainer>
  );
};

export default NewBet;
