import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  & + & {
    padding-top: 1.5rem;
  }
`

export const CartItemLeftPart = styled.div`
  display: flex;
  gap: 1.25rem;

  & > img {
    width: 4rem;
    height: 4rem;
  }
`

export const NameAndActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Name = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const DeleteItemButton = styled.button`
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;

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

export const Price = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  font-weight: 700;
  line-height: 130%;
`
