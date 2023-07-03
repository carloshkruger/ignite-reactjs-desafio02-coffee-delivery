import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  padding-top: 3.875rem;
  display: grid;
  grid-template-columns: 40rem 1fr;
  gap: 2rem;

  @media screen and (max-width: 1120px) {
    grid-template-columns: 1fr;
    padding-top: 1rem;
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

  @media screen and (max-width: 445px) {
    padding: 1rem;
  }
`

export const AddressFormContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  gap: 0.75rem;

  .uf input {
    text-transform: uppercase;
  }

  @media screen and (min-width: 700px) {
    .cep {
      grid-column: 1;
    }
    .street {
      grid-column: span 3;
    }
    .complement {
      grid-column: span 2;
    }
    .city {
      grid-column: span;
    }
  }

  @media screen and (max-width: 1120px) {
    grid-template-columns: 1fr;
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

export const PaymentContainer = styled.div`
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  margin-top: 0.75rem;

  @media screen and (max-width: 445px) {
    padding: 1rem;
  }
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

export const NoCoffeeMessage = styled.div`
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  text-align: center;
`
