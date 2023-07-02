import styled from 'styled-components'

export const Container = styled.main`
  padding-top: 4rem;

  @media screen and (max-width: 445px) {
    padding-top: 1rem;
  }

  @media screen and (max-width: 1120px) {
    img {
      display: none;
    }

    section {
      justify-content: center;
    }
  }

  section {
    display: flex;
    flex-direction: row;
    gap: 6.375rem;
    margin-top: 2.5rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1120px) {
    text-align: center;
  }
`

export const Title = styled.h1`
  color: ${(props) => props.theme['yellow-dark']};
  font-size: 2rem;
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
`

export const SubTitle = styled.h3`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`

export const InfoContainer = styled.div`
  border-radius: 6px 36px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  background: ${(props) => props.theme.background};
  min-width: 32.875rem;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(
      102.89deg,
      ${(props) => props.theme.yellow} 2.61%,
      ${(props) => props.theme.purple} 98.76%
    );
  }

  @media screen and (max-width: 1120px) {
    min-width: unset;
  }
`

const ICON_BACKGROUND = {
  yellow: 'yellow',
  purple: 'purple',
  yellowDark: 'yellow-dark',
}

interface InfoItemProps {
  iconColor: keyof typeof ICON_BACKGROUND
}

export const InfoItem = styled.div<InfoItemProps>`
  display: flex;
  gap: 0.75rem;

  & > svg {
    color: ${(props) => props.theme.white};
    box-sizing: unset;
    padding: 0.5rem;
    border-radius: 1000px;
    background: ${(props) => props.theme[ICON_BACKGROUND[props.iconColor]]};
  }
`

export const InfoData = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    line-height: 130%;

    span {
      font-weight: bold;
    }
  }
`
