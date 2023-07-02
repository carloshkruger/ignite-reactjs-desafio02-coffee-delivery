import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CartItem, Coffee } from '../../../../contexts/CartContext'
import {
  BuyCoffeeButton,
  CoffeeCounter,
  CoffeeCounterButton,
  CoffeeCounterValue,
  CoffeeDescription,
  CoffeeFooter,
  CoffeeItem,
  CoffeePriceContainer,
  CoffeePriceCurrency,
  CoffeePriceValue,
  CoffeeShopContainer,
  CoffeeTitle,
  Tag,
  TagsContainer,
} from './styles'
import { useState } from 'react'

export const currencyFormat = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  style: 'decimal',
  minimumFractionDigits: 2,
})

interface CoffeeCardProps {
  coffee: Coffee
  onAddItemToCart: (cartItem: CartItem) => void
}

export function CoffeeCard({ coffee, onAddItemToCart }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  function handleIncreaseQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecreaseQuantity() {
    if (quantity === 1) {
      return
    }
    setQuantity((state) => state - 1)
  }

  function handleAddItemToCart(coffee: Coffee) {
    onAddItemToCart({ coffee, quantity })
  }

  return (
    <CoffeeItem key={coffee.id}>
      <img src={coffee.imageName} alt="" />
      <TagsContainer>
        {coffee.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>
      <CoffeeTitle>{coffee.name}</CoffeeTitle>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>
      <CoffeeFooter>
        <CoffeePriceContainer>
          <CoffeePriceCurrency>R$</CoffeePriceCurrency>
          <CoffeePriceValue>
            {currencyFormat.format(coffee.unitPrice)}
          </CoffeePriceValue>
        </CoffeePriceContainer>
        <CoffeeShopContainer>
          <CoffeeCounter>
            <CoffeeCounterButton type="button" onClick={handleDecreaseQuantity}>
              <Minus size={14} />
            </CoffeeCounterButton>
            <CoffeeCounterValue disabled value={quantity} />
            <CoffeeCounterButton type="button" onClick={handleIncreaseQuantity}>
              <Plus size={14} />
            </CoffeeCounterButton>
          </CoffeeCounter>
          <BuyCoffeeButton
            onClick={() => handleAddItemToCart(coffee)}
            title="Adicionar ao carrinho"
          >
            <ShoppingCart weight="fill" size={22} />
          </BuyCoffeeButton>
        </CoffeeShopContainer>
      </CoffeeFooter>
    </CoffeeItem>
  )
}
