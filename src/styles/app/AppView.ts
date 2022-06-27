import styled from 'styled-components'

export const AppView = styled.main`
  display: flex;

  height: calc(103rem - 65px);

  margin: 0 0 0 0;
  padding: 0;

  @media (max-width: 1008px) {
    flex-direction: column;
    margin: 0;
  }
`
