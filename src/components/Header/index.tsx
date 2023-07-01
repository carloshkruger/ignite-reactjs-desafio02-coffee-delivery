import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, LocationContainer, LocationText } from './styles'

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <img src={coffeeDeliveryLogo} alt="" />

        <div>
          <LocationContainer>
            <MapPin weight="fill" size={24} />
            <LocationText>Aurora, SC</LocationText>
          </LocationContainer>
          <a href="" title="Carrinho">
            <ShoppingCart weight="fill" size={24} />
          </a>
        </div>
      </nav>
    </HeaderContainer>
  )
}
