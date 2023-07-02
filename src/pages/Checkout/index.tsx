import { ReactNode, useContext } from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PaymentOption } from './components/PaymentOption'
import {
  CartContext,
  CartItem as CartItemType,
} from '../../contexts/CartContext'
import { currencyFormat } from '../Home/components/CoffeeCard'
import {
  AddressFormContainer,
  CheckoutContainer,
  ConfirmOrderButton,
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
  PaymentOptionsContainer,
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
import CartItem from './components/CartItem'
import { useNavigate } from 'react-router-dom'

export enum PaymentOptionEnum {
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
  CASH = 'CASH',
}

interface PaymentOptionsListItem {
  id: PaymentOptionEnum
  title: string
  icon: ReactNode
}

export const paymentOptions: PaymentOptionsListItem[] = [
  {
    id: PaymentOptionEnum.CREDIT_CARD,
    title: 'Cartão de Crédito',
    icon: <CreditCard />,
  },
  {
    id: PaymentOptionEnum.DEBIT_CARD,
    title: 'Cartão de Débito',
    icon: <Bank />,
  },
  {
    id: PaymentOptionEnum.CASH,
    title: 'Dinheiro',
    icon: <Money />,
  },
]

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.number(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().length(2),
  complement: zod.string().optional(),
  paymentOption: zod.nativeEnum(PaymentOptionEnum),
})

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

const DELIVERY_FEE = 3.5

export interface CheckoutData {
  address: Omit<CheckoutFormData, 'paymentOption'>
  paymentOption: PaymentOptionEnum
  cartItems: {
    itemId: number
    quantity: number
  }[]
}

const calcItemTotalPrice = (cartItem: CartItemType) =>
  cartItem.coffee.unitPrice * cartItem.quantity

export function Checkout() {
  const { cartItems, clearCart, removeFromCart } = useContext(CartContext)
  const navigate = useNavigate()

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {},
  })

  const { handleSubmit, register, reset } = checkoutForm

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
    (total, currentItem) => calcItemTotalPrice(currentItem) + total,
    0,
  )
  const totalPrice = totalItemsPrice + DELIVERY_FEE

  if (!cartItems.length) {
    return <NoCoffeeMessage>Nenhum café selecionado</NoCoffeeMessage>
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCheckout)}>
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
          <AddressFormContainer>
            <Input
              id="cep"
              type="number"
              placeholder="CEP"
              maxLength={8}
              className="cep"
              {...register('cep')}
            />
            <Input
              id="street"
              type="text"
              placeholder="Rua"
              className="street"
              {...register('street')}
            />
            <Input
              id="number"
              type="number"
              placeholder="Número"
              className="number"
              {...register('number', { valueAsNumber: true })}
            />
            <Input
              id="complement"
              type="text"
              placeholder="Complemento"
              className="complement"
              {...register('complement')}
            />
            <Input
              id="neighborhood"
              type="text"
              placeholder="Bairro"
              className="neighborhood"
              {...register('neighborhood')}
            />
            <Input
              id="city"
              type="text"
              placeholder="Cidade"
              className="city"
              {...register('city')}
            />
            <Input
              id="uf"
              type="text"
              placeholder="UF"
              maxLength={2}
              className="uf"
              {...register('uf')}
            />
          </AddressFormContainer>
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
            {paymentOptions.map((option) => (
              <PaymentOption
                key={option.id}
                icon={option.icon}
                title={option.title}
                value={option.id}
                id={option.id}
                {...register('paymentOption')}
              />
            ))}
          </PaymentOptionsContainer>
        </PaymentContainer>
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
