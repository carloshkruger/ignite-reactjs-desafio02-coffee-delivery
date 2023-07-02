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
  NoCoffeeMessage,
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

import { FormEvent, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { currencyFormat } from '../Home/components/CoffeeCard'

const DELIVERY_FEE = 3.5

export function Checkout() {
  const { cartItems } = useContext(CartContext)

  function handleCheckout(event: FormEvent) {
    event.preventDefault()
  }

  const totalItemsPrice = cartItems.reduce(
    (total, currentItem) =>
      currentItem.coffee.unitPrice * currentItem.quantity + total,
    0,
  )
  const totalPrice = totalItemsPrice + DELIVERY_FEE

  if (!cartItems.length) {
    return <NoCoffeeMessage>Nenhum café selecionado</NoCoffeeMessage>
  }

  return (
    <CheckoutContainer onSubmit={handleCheckout}>
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
          {cartItems.map((item) => (
            <SelectedCoffeeItem key={item.coffee.id}>
              <SelectedCoffeeItemLeftPart>
                <img src={item.coffee.imageName} alt="" />
                <SelectedCoffeeNameAndActions>
                  <SelectedCoffeeName>{item.coffee.name}</SelectedCoffeeName>
                  <SelectedCoffeeActions>
                    <CoffeeCounter>
                      <CoffeeCounterButton>
                        <Minus size={14} />
                      </CoffeeCounterButton>
                      <CoffeeCounterValue>{item.quantity}</CoffeeCounterValue>
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
              <SelectedCoffeePrice>
                R${' '}
                {currencyFormat.format(item.quantity * item.coffee.unitPrice)}
              </SelectedCoffeePrice>
            </SelectedCoffeeItem>
          ))}

          <PurchaseSummaryContainer>
            <SummaryItem>
              <SummaryItemText>Total de itens</SummaryItemText>
              <SummaryItemValue>
                R$ {currencyFormat.format(totalItemsPrice)}
              </SummaryItemValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Entrega</SummaryItemText>
              <SummaryItemValue>
                R$ {currencyFormat.format(DELIVERY_FEE)}
              </SummaryItemValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryTotalText>Total</SummaryTotalText>
              <SummaryTotalValue>
                R$ {currencyFormat.format(totalPrice)}
              </SummaryTotalValue>
            </SummaryItem>
          </PurchaseSummaryContainer>

          <ConfirmOrderButton type="submit">
            Confirmar Pedido
          </ConfirmOrderButton>
        </SelectedCoffeeList>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  )
}
