import React from 'react'
import styled from 'styled-components'
import { styles } from '../styles'

const Outer = styled.div`
  background-color: black;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  pointer-events: none;
  display: flex;
  align-items: center;
  z-index: -1;
  justify-content: center;
`

const Inner = styled.div`
  color: white;
  margin: auto;
  text-align: center;
  font-size: 1.2rem;
  font-family: ${styles.bodyFont};
  line-height: 1.5rem;
  max-width: 50rem;

  p {
    margin-bottom: 1.5rem;
  }
`

const AboutFiller = () =>
  <Outer>
    <Inner>
      <p>
        Working on different projects for well-known, brave start-ups, national and international companies, gave us experience in design and project management.
        Creating an interior design, brand activation and shows from scratch or a full concept, one of the primary aims is to be always looking for the right fit by bringing a team together out of collaborations with agencies and freelancers or to only assist on the project.
      </p>
      <p>
        A big fascination by the impact spatial design has on the emotional understanding of one’s surroundings is one of the engines of the projects. Every space is an experience. Whether there’s an office or a festival stage to be designed; there are multiple possibilities to translate a concept both consciously and unconsciously to people in different layers of design. People can be moved by it!
      </p>
    </Inner>
  </Outer>

export default AboutFiller
