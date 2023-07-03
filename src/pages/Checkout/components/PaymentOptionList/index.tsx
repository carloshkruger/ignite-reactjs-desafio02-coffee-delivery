import { ReactNode } from 'react'
import { PaymentOption } from '../PaymentOption'
import { Bank, CreditCard, Money } from 'phosphor-react'
import { Container, ErrorMessage } from './styles'

export enum PaymentOptionEnum {
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
  CASH = 'CASH',
}

export interface PaymentOptionsListItem {
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

interface PaymentOptionListProps {
  error?: string
}

export function PaymentOptionList({ error }: PaymentOptionListProps) {
  const hasError = !!error

  return (
    <>
      <Container>
        {paymentOptions.map((option) => (
          <PaymentOption
            key={option.id}
            icon={option.icon}
            title={option.title}
            value={option.id}
            id={option.id}
          />
        ))}
      </Container>
      {hasError && <ErrorMessage>{error}</ErrorMessage>}
    </>
  )
}
