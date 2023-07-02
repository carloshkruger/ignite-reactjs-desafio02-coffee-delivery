import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { Container, ContentContainer, Text } from './styles'

type PaymentOptionProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  title: string
}

const PaymentOption = forwardRef<HTMLInputElement, PaymentOptionProps>(
  ({ id, icon, title, ...props }, ref) => {
    return (
      <Container>
        <input type="radio" id={id} name="paymentOption" ref={ref} {...props} />
        <label htmlFor={id}>
          <ContentContainer>
            {icon}
            <Text>{title}</Text>
          </ContentContainer>
        </label>
      </Container>
    )
  },
)

PaymentOption.displayName = PaymentOption.name

export { PaymentOption }
