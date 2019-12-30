import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const PageWrapper = styled.div`
  background-color: black;
  max-width: 800px;
  color: white;
  margin: auto;
`

const AboutPage = () => (
  <Layout>
    <PageWrapper>Over mij</PageWrapper>
  </Layout>
)

export default AboutPage
