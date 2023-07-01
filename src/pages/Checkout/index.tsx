import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import {
  CheckoutContainer,
  CoffeeCounter,
  CoffeeCounterButton,
  CoffeeCounterValue,
  ConfirmOrderButton,
  DeleteCoffeeButton,
  DeliveryAddressContainer,
  DeliveryAddressSubTitleText,
  DeliveryAddressTitleContainer,
  DeliveryAddressTitleText,
  DeliveryAddressTitleTextContainer,
  FinishOrderContainer,
  FinishOrderTitle,
  Input,
  PaymentContainer,
  PaymentOption,
  PaymentOptionText,
  PaymentOptionsContainer,
  PaymentSubTitleText,
  PaymentTitleContainer,
  PaymentTitleText,
  PaymentTitleTextContainer,
  PurchaseSummaryContainer,
  SelectedCoffeeActions,
  SelectedCoffeeItem,
  SelectedCoffeeItemLeftPart,
  SelectedCoffeeList,
  SelectedCoffeeName,
  SelectedCoffeeNameAndActions,
  SelectedCoffeePrice,
  SelectedCoffeesContainer,
  SelectedCoffeesTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemValue,
  SummaryTotalText,
  SummaryTotalValue,
} from './styles'

import irlandes from '../../assets/coffees/irlandes.png'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FinishOrderContainer>
        <FinishOrderTitle>Complete seu pedido</FinishOrderTitle>
        <DeliveryAddressContainer>
          <DeliveryAddressTitleContainer>
            <MapPinLine size={22} />
            <DeliveryAddressTitleTextContainer>
              <DeliveryAddressTitleText>
                Endereço de Entrega
              </DeliveryAddressTitleText>
              <DeliveryAddressSubTitleText>
                Informe o endereço onde deseja receber seu pedido
              </DeliveryAddressSubTitleText>
            </DeliveryAddressTitleTextContainer>
          </DeliveryAddressTitleContainer>
          <form>
            <div>
              <Input type="text" placeholder="CEP" />
            </div>
            <div>
              <Input type="text" placeholder="Rua" />
            </div>
            <div>
              <Input type="text" placeholder="Número" />
              <Input type="text" placeholder="Complemento" />
            </div>
            <div>
              <Input type="text" placeholder="Bairro" />
              <Input type="text" placeholder="Cidade" />
              <Input type="text" placeholder="UF" />
            </div>
          </form>
        </DeliveryAddressContainer>
        <PaymentContainer>
          <PaymentTitleContainer>
            <CurrencyDollar size={22} />
            <PaymentTitleTextContainer>
              <PaymentTitleText>Pagamento</PaymentTitleText>
              <PaymentSubTitleText>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </PaymentSubTitleText>
            </PaymentTitleTextContainer>
          </PaymentTitleContainer>
          <PaymentOptionsContainer>
            <PaymentOption isSelected={true}>
              <CreditCard size={16} />
              <PaymentOptionText>Cartão de crédito</PaymentOptionText>
            </PaymentOption>
            <PaymentOption isSelected={false}>
              <Bank size={16} />
              <PaymentOptionText>Cartão de débito</PaymentOptionText>
            </PaymentOption>
            <PaymentOption isSelected={false}>
              <Money size={16} />
              <PaymentOptionText>Dinheiro</PaymentOptionText>
            </PaymentOption>
          </PaymentOptionsContainer>
        </PaymentContainer>
      </FinishOrderContainer>
      <SelectedCoffeesContainer>
        <SelectedCoffeesTitle>Cafés selecionados</SelectedCoffeesTitle>
        <SelectedCoffeeList>
          <SelectedCoffeeItem>
            <SelectedCoffeeItemLeftPart>
              <img src={irlandes} alt="" />
              <SelectedCoffeeNameAndActions>
                <SelectedCoffeeName>Expresso Tradicional</SelectedCoffeeName>
                <SelectedCoffeeActions>
                  <CoffeeCounter>
                    <CoffeeCounterButton>
                      <Minus size={14} />
                    </CoffeeCounterButton>
                    <CoffeeCounterValue>1</CoffeeCounterValue>
                    <CoffeeCounterButton>
                      <Plus size={14} />
                    </CoffeeCounterButton>
                  </CoffeeCounter>
                  <DeleteCoffeeButton>
                    <Trash size={16} />
                    REMOVER
                  </DeleteCoffeeButton>
                </SelectedCoffeeActions>
              </SelectedCoffeeNameAndActions>
            </SelectedCoffeeItemLeftPart>
            <SelectedCoffeePrice>R$ 9,90</SelectedCoffeePrice>
          </SelectedCoffeeItem>
          <SelectedCoffeeItem>
            <SelectedCoffeeItemLeftPart>
              <img src={irlandes} alt="" />
              <SelectedCoffeeNameAndActions>
                <SelectedCoffeeName>Expresso Tradicional</SelectedCoffeeName>
                <SelectedCoffeeActions>
                  <CoffeeCounter>
                    <CoffeeCounterButton>
                      <Minus size={14} />
                    </CoffeeCounterButton>
                    <CoffeeCounterValue>1</CoffeeCounterValue>
                    <CoffeeCounterButton>
                      <Plus size={14} />
                    </CoffeeCounterButton>
                  </CoffeeCounter>
                  <DeleteCoffeeButton>
                    <Trash size={16} />
                    REMOVER
                  </DeleteCoffeeButton>
                </SelectedCoffeeActions>
              </SelectedCoffeeNameAndActions>
            </SelectedCoffeeItemLeftPart>
            <SelectedCoffeePrice>R$ 9,90</SelectedCoffeePrice>
          </SelectedCoffeeItem>

          <PurchaseSummaryContainer>
            <SummaryItem>
              <SummaryItemText>Total de itens</SummaryItemText>
              <SummaryItemValue>R$ 29,70</SummaryItemValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Entrega</SummaryItemText>
              <SummaryItemValue>R$ 3,50</SummaryItemValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryTotalText>Total</SummaryTotalText>
              <SummaryTotalValue>R$ 33,20</SummaryTotalValue>
            </SummaryItem>
          </PurchaseSummaryContainer>

          <ConfirmOrderButton>Confirmar Pedido</ConfirmOrderButton>
        </SelectedCoffeeList>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  )
}
