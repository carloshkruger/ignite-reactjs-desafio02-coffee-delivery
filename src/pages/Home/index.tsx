import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
  BenefitItem,
  BenefitItemIconContainer,
  BenefitText,
  BenefitsContainer,
  DescriptionContainer,
  FirstContent,
  HomeContainer,
  SubTitle,
  Title,
} from './styles'

import coffeeHome from '../../assets/coffee-home.png'

export function Home() {
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
    </HomeContainer>
  )
}
