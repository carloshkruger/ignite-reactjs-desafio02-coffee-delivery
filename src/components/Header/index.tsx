import { useContext } from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { HeaderContainer, LocationContainer, LocationText } from './styles'

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

export function Header() {
  const { cartItems } = useContext(CartContext)

  const cartHasItems = !!cartItems.length

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
            {cartHasItems && <span>{cartItems.length}</span>}
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}
