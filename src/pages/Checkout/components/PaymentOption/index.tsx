import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { Container, ContentContainer, Text } from './styles'
import { useFormContext } from 'react-hook-form'

type PaymentOptionProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  title: string
}

const PaymentOption = forwardRef<HTMLInputElement, PaymentOptionProps>(
  ({ id, icon, title, ...props }, ref) => {
    const { register } = useFormContext()

    return (
      <Container>
        <input type="radio" id={id} {...register('paymentOption')} {...props} />
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
