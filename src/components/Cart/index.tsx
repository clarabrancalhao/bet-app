import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { ICartGame } from '../../utils/interfaces'
import {
  BoldText,
  Card,
  ContentWrapper,
  GamesWrapper,
  LightText,
  NormalText,
  TotalWrapper,
  TitleWrapper,
} from './styles'
import CartItem from '../CartItem'
import { saveCart } from '../../modules/cart/actions'
import { BUTTON_THEME } from '../Button/styles'
import Button from '../Button'
import { handleFormat } from '../../utils/handleFormat'
import { notify } from '../../utils/notify'

const Cart = () => {
  const dispatch = useDispatch()

  const games: ICartGame[] = useSelector(
    (state: RootStateOrAny) => state.cart.games
  )
  const totalAmount = useSelector(
    (state: RootStateOrAny) => state.cart.totalAmount
  )

  const parsedGames = games.map(({ game_id, selectedNumbers }) => ({
    game_id,
    numbers: selectedNumbers,
  }))

  const handleSaveCart = () => {
    if (games.length > 0) {
      if (totalAmount > (games && games[0]['min-cart-value'])) {
        dispatch(saveCart(parsedGames))
        notify('Cart Saved!')
      } else {
        notify(
          `The min cart value is ${handleFormat(games[0]['min-cart-value'])}.`
        )
      }
    } else {
      notify('You need to add some games to cart')
    }
  }

  return (
    <Card>
      <ContentWrapper>
        <TitleWrapper>
          <BoldText>CART</BoldText>
          {games.length === 0 && <NormalText>Cart is empty</NormalText>}
        </TitleWrapper>
        {games.length > 0 && (
          <GamesWrapper>
            {games.map((game) => {
              return <CartItem key={game.id} game={game} />
            })}
          </GamesWrapper>
        )}
        <TotalWrapper>
          <BoldText>CART</BoldText>
          <LightText>TOTAL: {handleFormat(totalAmount)}</LightText>
        </TotalWrapper>
      </ContentWrapper>
      <Button className={BUTTON_THEME.SAVE_CART} onClick={handleSaveCart}>
        Save
      </Button>
    </Card>
  )
}

export default Cart
