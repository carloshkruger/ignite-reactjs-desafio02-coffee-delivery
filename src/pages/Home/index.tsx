import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from 'phosphor-react'
import { coffeeList } from './coffeeList'

import {
  BenefitItem,
  BenefitItemIconContainer,
  BenefitText,
  BenefitsContainer,
  BuyCoffeeButton,
  CoffeeCounter,
  CoffeeCounterButton,
  CoffeeCounterValue,
  CoffeeDescription,
  CoffeeFooter,
  CoffeeItem,
  CoffeeListContainer,
  CoffeeListTitle,
  CoffeeListWrapper,
  CoffeePriceContainer,
  CoffeePriceCurrency,
  CoffeePriceValue,
  CoffeeShopContainer,
  CoffeeTitle,
  DescriptionContainer,
  FirstContent,
  HomeContainer,
  SubTitle,
  Tag,
  TagsContainer,
  Title,
} from './styles'

import coffeeHome from '../../assets/coffee-home.png'

export function Home() {
  const currencyFormat = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'decimal',
    minimumFractionDigits: 2,
  })

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
                <Coffee weight="fill" size={16} />
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
                    <CoffeeCounterButton>
                      <Minus size={14} />
                    </CoffeeCounterButton>
                    <CoffeeCounterValue>1</CoffeeCounterValue>
                    <CoffeeCounterButton>
                      <Plus size={14} />
                    </CoffeeCounterButton>
                  </CoffeeCounter>
                  <BuyCoffeeButton title="Adicionar ao carrinho">
                    <ShoppingCart weight="fill" size={22} />
                  </BuyCoffeeButton>
                </CoffeeShopContainer>
              </CoffeeFooter>
            </CoffeeItem>
          ))}
        </CoffeeListContainer>
      </CoffeeListWrapper>
    </HomeContainer>
  )
}
