import styled from 'styled-components'

export const HomeContainer = styled.div``

export const FirstContent = styled.div`
  padding-top: 3.875rem;
  padding-bottom: 5.875rem;
  display: flex;
  flex-direction: row;
  gap: 3.5rem;

  @media screen and (max-width: 1120px) {
    & > img {
      display: none;
    }
  }

  /* background: radial-gradient(at 50% 40%, #fff, transparent 80%),
    radial-gradient(at 50% -47%, hsla(313, 39%, 93%, 1), transparent 80%),
    radial-gradient(at 100% 0%, hsla(320, 78%, 79%, 1) 0, transparent 32%),
    radial-gradient(at 100% 98%, #fff1eb, transparent),
    radial-gradient(at 0 97%, hsla(193, 81%, 84%, 1), transparent); */
`

export const DescriptionContainer = styled.div``

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 130%;
  font-family: 'Baloo 2';
  margin-bottom: 1rem;
`

export const SubTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 130%;
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.158fr;
  gap: 1.25rem 2.5rem;
  margin-top: 4.375rem;
`

export const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const ICON_BACKGROUND_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  baseText: 'base-text',
  purple: 'purple',
} as const

interface BenefitItemIconContainerProps {
  color: keyof typeof ICON_BACKGROUND_COLORS
}

export const BenefitItemIconContainer = styled.span<BenefitItemIconContainerProps>`
  display: flex;
  background: ${(props) => props.theme[ICON_BACKGROUND_COLORS[props.color]]};
  color: ${(props) => props.theme.background};
  border-radius: 50%;
  padding: 0.5rem;
`

export const BenefitText = styled.span`
  color: var(--base-text);
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
`

export const CoffeeListWrapper = styled.div``

export const CoffeeListTitle = styled.div`
  color: var(--base-subtitle);
  font-size: 2rem;
  font-family: 'Baloo 2';
  font-weight: 800;
  line-height: 130%;
  margin-top: 2rem;
`

export const CoffeeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 2rem;
  margin-top: 3.375rem;
`

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

export const CoffeeCounter = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
`

export const CoffeeCounterButton = styled.button`
  color: ${(props) => props.theme.purple};
  cursor: pointer;
  border: 0;
  background: transparent;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const CoffeeCounterValue = styled.span`
  width: 1.25rem;
  color: ${(props) => props.theme['base-title']};
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
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
