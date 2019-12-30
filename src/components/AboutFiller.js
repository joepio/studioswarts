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
        Working on different projects for well-known, brave start-ups, national and international companies, I accumulated considerable experience in design, shows and project management.
      </p>
      <p>
        I’m fascinated by the impact spatial design has on the emotional understanding of one’s surroundings. For me every space is an experience. Whether you design an office or a festival stage; I believe you can translate a concept both conscious and unconsciously to people in different layers of design.
      </p>
    </Inner>
  </Outer>

export default AboutFiller
