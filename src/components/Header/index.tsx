import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, LocationContainer, LocationText } from './styles'

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Home">
          <img src={coffeeDeliveryLogo} alt="" />
        </NavLink>

        <div>
          <LocationContainer>
            <MapPin weight="fill" size={24} />
            <LocationText>Aurora, SC</LocationText>
          </LocationContainer>
          <NavLink to="/checkout" title="Carrinho">
            <ShoppingCart weight="fill" size={24} />
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}
