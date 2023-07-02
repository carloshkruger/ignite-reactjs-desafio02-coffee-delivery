import { useState } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { CartItem, Coffee } from '../../../../contexts/CartContext'
import { CoffeeCounter } from '../../../../components/CoffeeCounter'
import {
  BuyCoffeeButton,
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

  const formattedPrice = currencyFormat.format(coffee.unitPrice)

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
          <CoffeePriceValue>{formattedPrice}</CoffeePriceValue>
        </CoffeePriceContainer>
        <CoffeeShopContainer>
          <CoffeeCounter
            quantity={quantity}
            onIncreaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
          />
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
