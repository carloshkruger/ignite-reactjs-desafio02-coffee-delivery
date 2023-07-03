import styled, { css } from 'styled-components'

interface ContainterProps {
  hasError: boolean
}

export const Container = styled.div<ContainterProps>`
  display: flex;
  flex-direction: column;

  input {
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['base-button']};
    background: ${(props) => props.theme['base-input']};
    padding: 0.75rem;
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    width: 100%;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus,
    &:not(:placeholder-shown) {
      outline: 1px solid ${(props) => props.theme['yellow-dark']};
      border: 1px solid ${(props) => props.theme['base-button']};
    }

    ${(props) =>
      props.hasError &&
      css`
        border: 1px solid ${(props) => props.theme.danger};
      `}
  }
`

export const InputErrorMessage = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme.danger};
  padding-top: 1px;
`
