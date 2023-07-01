import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.div`
  padding-top: 3.875rem;
  display: grid;
  grid-template-columns: 40rem 1fr;
  gap: 2rem;

  @media screen and (max-width: 1120px) {
    grid-template-columns: 1fr;
  }
`

export const FinishOrderContainer = styled.div``

export const FinishOrderTitle = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.125rem;
  font-family: 'Baloo 2';
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 1rem;
`

export const DeliveryAddressContainer = styled.div`
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;

  & > form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > div {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
  }
`

export const DeliveryAddressTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  & > svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const DeliveryAddressTitleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const DeliveryAddressTitleText = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
`

export const DeliveryAddressSubTitleText = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
`

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  padding: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus,
  &:not(:placeholder-shown) {
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`

export const PaymentContainer = styled.div`
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  margin-top: 0.75rem;
`

export const PaymentTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  & > svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const PaymentTitleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PaymentTitleText = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
`

export const PaymentSubTitleText = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
`

export const PaymentOptionsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;

  @media screen and (max-width: 510px) {
    flex-direction: column;
  }
`

interface PaymentOptionProps {
  isSelected: boolean
}

export const PaymentOption = styled.button<PaymentOptionProps>`
  padding: 1rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  display: flex;
  gap: 0.75rem;
  cursor: pointer;
  border: 0;
  flex: 1;

  & > svg {
    color: ${(props) => props.theme.purple};
  }

  ${(props) =>
    props.isSelected
      ? css`
          background: ${props.theme['purple-light']};
          border: 1px solid ${props.theme.purple};
        `
      : ''}

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};

    & > svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const PaymentOptionText = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;
`

export const SelectedCoffeesContainer = styled.div``

export const SelectedCoffeesTitle = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.125rem;
  font-family: 'Baloo 2';
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 1rem;
`

export const SelectedCoffeeList = styled.div`
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;

  @media screen and (max-width: 445px) {
    padding: 1rem;
  }
`

export const SelectedCoffeeItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  & + & {
    padding-top: 1.5rem;
  }
`

export const SelectedCoffeeItemLeftPart = styled.div`
  display: flex;
  gap: 1.25rem;

  & > img {
    width: 4rem;
    height: 4rem;
  }
`

export const SelectedCoffeeNameAndActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const SelectedCoffeeName = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
`

export const SelectedCoffeeActions = styled.div`
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

export const DeleteCoffeeButton = styled.button`
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;

  & > svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};

    & > svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const SelectedCoffeePrice = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  font-weight: 700;
  line-height: 130%;
`

export const PurchaseSummaryContainer = styled.div`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SummaryItemText = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
`

export const SummaryItemValue = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
`

export const SummaryTotalText = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;
`

export const SummaryTotalValue = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;
`

export const ConfirmOrderButton = styled.button`
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border: 0;
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
