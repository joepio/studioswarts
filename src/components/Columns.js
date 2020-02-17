import styled from 'styled-components'
import { styles } from '../styles'

const Columns = styled.div`
  justify-self: center;
  display: flex;
  margin: 1rem;
  flex-flow: column wrap;
  align-content: space-between;
  /* If you have flow errors on the homepage, play with this number! */
  height: 3000px;
  max-width: 1300px;
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
  /* If you have flow errors on the homepage, play with this number! */
    height: 3600px;
  }

  @media(max-width: ${styles.smallScreen}) {
    height: auto;
  }
`

export default Columns
