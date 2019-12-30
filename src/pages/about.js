import React from 'react'
import Layout from '../components/layout'
import AboutFiller from '../components/AboutFiller'
import styled from 'styled-components'

const AboutWrapper = styled.div`
  position: relative;
  height: 100vh;
  z-index: 2;
`
const AboutPage = () => (
  <Layout>
    <AboutWrapper>
      <AboutFiller />
    </AboutWrapper>
  </Layout>
)

export default AboutPage
