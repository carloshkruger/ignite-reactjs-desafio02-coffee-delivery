import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;

  @media screen and (max-width: 510px) {
    flex-direction: column;
  }
`

export const ErrorMessage = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme.danger};
  padding-top: 1px;
`
