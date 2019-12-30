import styled from 'styled-components'
import { styles } from '../styles'

const Columns = styled.div`
  justify-self: center;
  display: flex;
  margin: 1rem;
  flex-flow: column wrap;
  align-content: space-between;
  height: 2500px;
  max-width: 1000px;
  margin: auto;
  margin-top: 5rem;
  padding-left: 2rem;
  padding-right: 2rem;

  &::before,
  &::after {
    content: "";
    flex-basis: 100%;
    width: 0;
    order: 2;
  }

  @media(max-width: ${styles.mediumScreen}) {
    height: 3600px;
  }

  @media(max-width: ${styles.smallScreen}) {
    height: auto;
  }
`

export default Columns
