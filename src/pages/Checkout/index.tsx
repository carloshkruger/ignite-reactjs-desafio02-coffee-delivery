import { useContext } from 'react'
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

enum PaymentOptionEnum {
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
  CASH = 'CASH',
}

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe o CEP'),
  rua: zod.string().min(1, 'Informe a Rua'),
  numero: zod.number(),
  bairro: zod.string().min(1, 'Informe o bairro'),
  cidade: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().length(2),
  complemento: zod.string().optional(),
  paymentOption: zod.nativeEnum(PaymentOptionEnum),
})

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

const DELIVERY_FEE = 3.5

interface CheckoutData {
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
  const { cartItems, removeFromCart } = useContext(CartContext)

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {},
  })

  const { handleSubmit, register, formState, reset } = checkoutForm

  function handleCheckout(data: CheckoutFormData) {
    const checkoutData: CheckoutData = {
      address: {
        cep: data.cep,
        rua: data.rua,
        numero: data.numero,
        bairro: data.bairro,
        cidade: data.cidade,
        uf: data.uf,
        complemento: data.complemento,
      },
      paymentOption: data.paymentOption,
      cartItems: cartItems.map((item) => ({
        itemId: item.coffee.id,
        quantity: item.quantity,
      })),
    }
    console.log(checkoutData)
    reset()
  }

  function handleRemoveItemFromCart(item: CartItemType) {
    removeFromCart(item)
  }

  const totalItemsPrice = cartItems.reduce(
    (total, currentItem) => calcItemTotalPrice(currentItem) + total,
    0,
  )
  const totalPrice = totalItemsPrice + DELIVERY_FEE

  // if (!cartItems.length) {
  //   return <NoCoffeeMessage>Nenhum café selecionado</NoCoffeeMessage>
  // }

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
            <div>
              <Input
                id="cep"
                type="number"
                placeholder="CEP"
                maxLength={8}
                {...register('cep')}
              />
            </div>
            <div>
              <Input
                id="rua"
                type="text"
                placeholder="Rua"
                {...register('rua')}
              />
            </div>
            <div>
              <Input
                id="numero"
                type="number"
                placeholder="Número"
                {...register('numero', { valueAsNumber: true })}
              />
              <Input
                id="complemento"
                type="text"
                placeholder="Complemento"
                {...register('complemento')}
              />
            </div>
            <div>
              <Input
                id="bairro"
                type="text"
                placeholder="Bairro"
                {...register('bairro')}
              />
              <Input
                id="cidade"
                type="text"
                placeholder="Cidade"
                {...register('cidade')}
              />
              <Input
                id="uf"
                type="text"
                placeholder="UF"
                maxLength={2}
                {...register('uf')}
              />
            </div>
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
            <PaymentOption
              icon={<CreditCard />}
              title="Cartão de Crédito"
              value={PaymentOptionEnum.CREDIT_CARD}
              id={PaymentOptionEnum.CREDIT_CARD}
              {...register('paymentOption')}
            />
            <PaymentOption
              icon={<Bank />}
              title="Cartão de Débito"
              value={PaymentOptionEnum.DEBIT_CARD}
              id={PaymentOptionEnum.DEBIT_CARD}
              {...register('paymentOption')}
            />
            <PaymentOption
              icon={<Money />}
              title="Dinheiro"
              value={PaymentOptionEnum.CASH}
              id={PaymentOptionEnum.CASH}
              {...register('paymentOption')}
            />
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
