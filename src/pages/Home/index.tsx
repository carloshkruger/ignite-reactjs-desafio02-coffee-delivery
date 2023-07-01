import { useContext } from 'react'
import {
  Coffee as CoffeeIcon,
  Package,
  ShoppingCart,
  Timer,
} from 'phosphor-react'
import { CartContext, CartItem } from '../../contexts/CartContext'
import { CoffeeCard } from './components/CoffeeCard'
import { coffeeList } from './coffeeList'
import {
  BenefitItem,
  BenefitItemIconContainer,
  BenefitText,
  BenefitsContainer,
  CoffeeListContainer,
  CoffeeListTitle,
  CoffeeListWrapper,
  DescriptionContainer,
  FirstContent,
  HomeContainer,
  SubTitle,
  Title,
} from './styles'
import coffeeHome from '../../assets/coffee-home.png'

export function Home() {
  const { addToCart } = useContext(CartContext)

  function addItemToCart(cartItem: CartItem) {
    addToCart(cartItem)
  }

  return (
    <HomeContainer>
      <FirstContent>
        <DescriptionContainer>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <SubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </SubTitle>

          <BenefitsContainer>
            <BenefitItem>
              <BenefitItemIconContainer color="yellowDark">
                <ShoppingCart weight="fill" size={16} />
              </BenefitItemIconContainer>
              <BenefitText>Compra simples e segura</BenefitText>
            </BenefitItem>
            <BenefitItem>
              <BenefitItemIconContainer color="baseText">
                <Package weight="fill" size={16} />
              </BenefitItemIconContainer>
              <BenefitText>Embalagem mantém o café intacto</BenefitText>
            </BenefitItem>
            <BenefitItem>
              <BenefitItemIconContainer color="yellow">
                <Timer weight="fill" size={16} />
              </BenefitItemIconContainer>
              <BenefitText>Entrega rápida e rastreada</BenefitText>
            </BenefitItem>
            <BenefitItem>
              <BenefitItemIconContainer color="purple">
                <CoffeeIcon weight="fill" size={16} />
              </BenefitItemIconContainer>
              <BenefitText>O café chega fresquinho até você</BenefitText>
            </BenefitItem>
          </BenefitsContainer>
        </DescriptionContainer>
        <img src={coffeeHome} alt="" />
      </FirstContent>

      <CoffeeListWrapper>
        <CoffeeListTitle>Nossos cafés</CoffeeListTitle>

        <CoffeeListContainer>
          {coffeeList.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
              onAddItemToCart={addItemToCart}
            />
          ))}
        </CoffeeListContainer>
      </CoffeeListWrapper>
    </HomeContainer>
  )
}
