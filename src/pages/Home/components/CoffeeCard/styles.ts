import styled from 'styled-components'

export const CoffeeItem = styled.div`
  border-radius: 0.375rem 2.25rem;
  background: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1.25rem 1.25rem 1.25rem;

  & > img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
    margin-bottom: 1rem;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const Tag = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
`

export const CoffeeTitle = styled.div`
  color: ${(props) => props.theme['base-subtitle']};
  text-align: center;
  /* Title/Title S */
  font-size: 1.25rem;
  font-family: 'Baloo 2';
  font-weight: 700;
  line-height: 130%;
  margin-top: 1.25rem;
  margin-top: 0.5rem;
`

export const CoffeeDescription = styled.div`
  color: ${(props) => props.theme['base-label']};
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
`

export const CoffeeFooter = styled.footer`
  margin-top: 2.0625rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CoffeePriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.3rem;
`

export const CoffeePriceCurrency = styled.div`
  font-weight: 400;
  color: ${(props) => props.theme['base-label']};
  font-size: 0.875rem;
  line-height: 130%;
`

export const CoffeePriceValue = styled.div`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.6rem;
  font-weight: 900;
  line-height: 130%;
`

export const CoffeeShopContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const BuyCoffeeButton = styled.button`
  border: 0;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
  display: flex;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
