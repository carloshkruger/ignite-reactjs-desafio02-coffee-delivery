import { InputHTMLAttributes, forwardRef } from 'react'
import { Container, InputErrorMessage } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    const hasError = !!error

    return (
      <Container className={className} hasError={hasError}>
        <input {...props} ref={ref} />
        {hasError && <InputErrorMessage>{error}</InputErrorMessage>}
      </Container>
    )
  },
)

Input.displayName = Input.name

export { Input }
