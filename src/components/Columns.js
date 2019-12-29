import styled from 'styled-components'

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

  &::before,
  &::after {
    content: "";
    flex-basis: 100%;
    width: 0;
    order: 2;
  }
`

export default Columns
