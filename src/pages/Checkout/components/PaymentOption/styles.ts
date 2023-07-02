import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;

  input {
    visibility: hidden;
    appearance: none;
    display: none;
  }

  input:checked + label div {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`

export const ContentContainer = styled.div`
  padding: 1rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  display: flex;
  gap: 0.75rem;
  border: 0;
  flex: 1;
  cursor: pointer;

  & > svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};

    & > svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const Text = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;
`
