import { IGame } from '../../utils/interfaces';
import {
  NewBetContainer,
  TitleContainer,
  BottomButtonContainer,
  BoldParagraph,
  BoldTitle,
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
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCallback, useEffect } from 'react';
import { Button, BUTTON_THEME } from '../Button/styles';

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

  const handleClearGame = useCallback(() => {
    dispatch(clearGame());
  }, [dispatch]);

  const handleAddToCart = () => {
    if (selectedNumbers.length === selectedGame['max-number']) {
      dispatch(
        addGameToCart({
          id: Date.now(),
          type: selectedGame.type,
          price: selectedGame.price,
          selectedNumbers: selectedNumbers,
          color: selectedGame.color,
          'min-cart-value': selectedGame['min-cart-value'],
        })
      );
      dispatch(clearGame());
    }
  };

  useEffect(() => {
    return handleClearGame();
  }, [handleClearGame]);

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
        <Button
          className={BUTTON_THEME.GREEN_BORDER}
          onClick={handleCompleteGame}>
          Complete Game
        </Button>
        <Button className={BUTTON_THEME.GREEN_BORDER} onClick={handleClearGame}>
          Clear Game
        </Button>
        <Button className={BUTTON_THEME.ADD_TO_CART} onClick={handleAddToCart}>
          <AiOutlineShoppingCart size={24} color="#FFFFFF" />
          Add to Cart
        </Button>
      </BottomButtonContainer>
    </NewBetContainer>
  );
};

export default NewBet;
