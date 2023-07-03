import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import deliveryingOrder from '../../assets/deliverying-order.svg'
import {
  Container,
  InfoContainer,
  InfoData,
  InfoItem,
  SubTitle,
  Title,
  TitleContainer,
} from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { CheckoutData } from '../Checkout'
import { useEffect } from 'react'
import { paymentOptions } from '../Checkout/components/PaymentOptionList'

interface Location {
  state: CheckoutData
}

export function OrderCompleted() {
  const { state: checkoutData } = useLocation() as unknown as Location

  const navigate = useNavigate()

  useEffect(() => {
    if (!checkoutData) {
      navigate('/')
    }
  }, [checkoutData, navigate])

  if (!checkoutData) {
    return <></>
  }

  return (
    <Container>
      <TitleContainer>
        <Title>Uhu! Pedido confirmado</Title>
        <SubTitle>
          Agora é só aguardar que logo o café chegará até você
        </SubTitle>
      </TitleContainer>

      <section>
        <InfoContainer>
          <InfoItem iconColor="purple">
            <MapPin weight="fill" size={16} />
            <InfoData>
              <p>
                Entrega em{' '}
                <span>
                  {checkoutData.address.street}, {checkoutData.address.number}
                </span>
              </p>
              <p>
                {checkoutData.address.neighborhood} -{' '}
                {checkoutData.address.city}, {checkoutData.address.uf}
              </p>
            </InfoData>
          </InfoItem>

          <InfoItem iconColor="yellow">
            <Timer weight="fill" size={16} />
            <InfoData>
              <p>Previsão de entrega</p>
              <p>
                <span>20min - 30min</span>
              </p>
            </InfoData>
          </InfoItem>

          <InfoItem iconColor="yellowDark">
            <CurrencyDollar weight="fill" size={16} />
            <InfoData>
              <p>Pagamento na entrega</p>
              <p>
                <span>
                  {
                    paymentOptions.find(
                      (option) => option.id === checkoutData.paymentOption,
                    )?.title
                  }
                </span>
              </p>
            </InfoData>
          </InfoItem>
        </InfoContainer>
        <img src={deliveryingOrder} alt="" />
      </section>
    </Container>
  )
}
