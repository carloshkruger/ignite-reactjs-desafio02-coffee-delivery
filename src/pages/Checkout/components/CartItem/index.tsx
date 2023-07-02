import { Trash } from 'phosphor-react'
import { CoffeeCounter } from '../../../../components/CoffeeCounter'
import {
  ActionsContainer,
  CartItemLeftPart,
  Container,
  DeleteItemButton,
  Name,
  NameAndActions,
  Price,
} from './styles'
import {
  CartContext,
  CartItem as CartItemType,
} from '../../../../contexts/CartContext'
import { currencyFormat } from '../../../Home/components/CoffeeCard'
import { useContext } from 'react'

interface CartItemProps {
  item: CartItemType
  onRemoveItemFromCart: (cartItem: CartItemType) => void
}

export default function CartItem({
  item,
  onRemoveItemFromCart,
}: CartItemProps) {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext)

  function handleIncreaseQuantity() {
    increaseQuantity(item)
  }

  function handleDecreaseQuantity() {
    decreaseQuantity(item)
  }

  const formattedPrice = currencyFormat.format(
    item.coffee.unitPrice * item.quantity,
  )

  return (
    <Container key={item.coffee.id}>
      <CartItemLeftPart>
        <img src={item.coffee.imageName} alt="" />
        <NameAndActions>
          <Name>{item.coffee.name}</Name>
          <ActionsContainer>
            <CoffeeCounter
              quantity={item.quantity}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDecreaseQuantity={handleDecreaseQuantity}
            />
            <DeleteItemButton
              type="button"
              onClick={() => onRemoveItemFromCart(item)}
            >
              <Trash size={16} />
              REMOVER
            </DeleteItemButton>
          </ActionsContainer>
        </NameAndActions>
      </CartItemLeftPart>
      <Price>R$ {formattedPrice}</Price>
    </Container>
  )
}
