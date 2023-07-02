import { Minus, Plus } from 'phosphor-react'
import { Container, CounterButton, CounterValue } from './styles'

interface CoffeeCounterProps {
  quantity: number
  onIncreaseQuantity: () => void
  onDecreaseQuantity: () => void
}

export function CoffeeCounter({
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
}: CoffeeCounterProps) {
  return (
    <Container>
      <CounterButton
        disabled={quantity <= 1}
        type="button"
        onClick={onDecreaseQuantity}
      >
        <Minus size={14} />
      </CounterButton>
      <CounterValue disabled value={quantity} />
      <CounterButton type="button" onClick={onIncreaseQuantity}>
        <Plus size={14} />
      </CounterButton>
    </Container>
  )
}
