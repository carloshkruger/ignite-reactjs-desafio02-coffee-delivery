import { useContext } from 'react'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import {
  CartContext,
  CartItem as CartItemType,
} from '../../contexts/CartContext'
import CartItem from './components/CartItem'
import { currencyFormat } from '../Home/components/CoffeeCard'
import {
  PaymentOptionEnum,
  PaymentOptionList,
} from './components/PaymentOptionList'
import {
  AddressForm,
  CheckoutFormData,
  checkoutFormValidationSchema,
} from './components/AddressForm'
import {
  CheckoutContainer,
  ConfirmOrderButton,
  DeliveryAddressContainer,
  DeliveryAddressSubTitleText,
  DeliveryAddressTitleContainer,
  DeliveryAddressTitleText,
  DeliveryAddressTitleTextContainer,
  FinishOrderContainer,
  FinishOrderTitle,
  NoCoffeeMessage,
  PaymentContainer,
  PaymentSubTitleText,
  PaymentTitleContainer,
  PaymentTitleText,
  PaymentTitleTextContainer,
  PurchaseSummaryContainer,
  SelectedCoffeeList,
  SelectedCoffeesContainer,
  SelectedCoffeesTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemValue,
  SummaryTotalText,
  SummaryTotalValue,
} from './styles'

const DELIVERY_FEE = 3.5

export interface CheckoutData {
  address: Omit<CheckoutFormData, 'paymentOption'>
  paymentOption: PaymentOptionEnum
  cartItems: {
    itemId: number
    quantity: number
  }[]
}

export function Checkout() {
  const { cartItems, clearCart, removeFromCart } = useContext(CartContext)
  const navigate = useNavigate()

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {},
  })

  const { handleSubmit, reset, formState } = checkoutForm

  function handleCheckout(data: CheckoutFormData) {
    const checkoutData: CheckoutData = {
      address: {
        cep: data.cep,
        street: data.street,
        number: data.number,
        neighborhood: data.neighborhood,
        city: data.city,
        uf: data.uf,
        complement: data.complement,
      },
      paymentOption: data.paymentOption,
      cartItems: cartItems.map((item) => ({
        itemId: item.coffee.id,
        quantity: item.quantity,
      })),
    }
    console.log(checkoutData)
    reset()
    clearCart()
    navigate('/order-completed', {
      state: checkoutData,
    })
  }

  function handleRemoveItemFromCart(item: CartItemType) {
    removeFromCart(item)
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
    <CheckoutContainer onSubmit={handleSubmit(handleCheckout)}>
      <FinishOrderContainer>
        <FormProvider {...checkoutForm}>
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
            <AddressForm />
          </DeliveryAddressContainer>
          <PaymentContainer>
            <PaymentTitleContainer>
              <CurrencyDollar size={22} />
              <PaymentTitleTextContainer>
                <PaymentTitleText>Pagamento</PaymentTitleText>
                <PaymentSubTitleText>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </PaymentSubTitleText>
              </PaymentTitleTextContainer>
            </PaymentTitleContainer>
            <PaymentOptionList
              error={formState.errors.paymentOption?.message}
            />
          </PaymentContainer>
        </FormProvider>
      </FinishOrderContainer>
      <SelectedCoffeesContainer>
        <SelectedCoffeesTitle>Cafés selecionados</SelectedCoffeesTitle>
        <SelectedCoffeeList>
          {cartItems.map((item) => (
            <CartItem
              key={item.coffee.id}
              item={item}
              onRemoveItemFromCart={handleRemoveItemFromCart}
            />
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
