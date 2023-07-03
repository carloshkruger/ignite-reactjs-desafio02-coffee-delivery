import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  gap: 0.75rem;

  .uf input {
    text-transform: uppercase;
  }

  @media screen and (min-width: 700px) {
    .cep {
      grid-column: 1;
    }
    .street {
      grid-column: span 3;
    }
    .complement {
      grid-column: span 2;
    }
    .city {
      grid-column: span;
    }
  }

  @media screen and (max-width: 1120px) {
    grid-template-columns: 1fr;
  }
`
