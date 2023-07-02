import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
`

export const CounterButton = styled.button`
  color: ${(props) => props.theme.purple};
  cursor: pointer;
  border: 0;
  background: transparent;

  &:not(:disabled):hover {
    color: ${(props) => props.theme['purple-dark']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
`

export const CounterValue = styled.input`
  width: 1.25rem;
  color: ${(props) => props.theme['base-title']};
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
  background: transparent;
  border: 0;
`
