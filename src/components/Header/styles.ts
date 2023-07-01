import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.5rem;

    align-items: center;
    justify-content: space-between;
    flex: 1;
    max-width: 70rem;
    margin: 0 auto;

    & > div {
      display: flex;
      gap: 0.75rem;
    }

    & > div > a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      background: ${(props) => props.theme['yellow-light']};

      color: ${(props) => props.theme['yellow-dark']};
      border-radius: 6px;
      transition: color 0.1s, background 0.1s;

      &:hover {
        background: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme['yellow-light']};
      }
    }
  }
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background: ${(props) => props.theme['purple-light']};
  padding: 0.5rem;
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
`

export const LocationText = styled.span`
  white-space: nowrap;
  max-width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
`
