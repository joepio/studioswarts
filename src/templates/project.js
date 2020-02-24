import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { styles } from '../styles'
import styled from 'styled-components'

const Hero = styled.div`
  height: 50rem;
  font-size: 3rem;
  overflow: hidden;
  position: relative;
  color: white;
`

const heroImageStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
}

const Text = styled.div`
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.7rem;
  padding: 3rem;
  max-width: 50rem;
  color: white;
  margin: auto;
  font-family: ${styles.bodyFont};

  p {
    margin-bottom: 1rem;
  }
`

const ImgWrapper = styled.div`
  padding: 1rem;
  max-width: 70vw;
  padding-top: 0;
  margin: auto;
  @media(max-width: 768px) {
    max-width: 100vh;
  }
`

const TitleComp = styled.h1`
  margin-top: 3rem;
  font-family: Faustina, serif;
  font-size: 4rem;
  text-align: center;
  color: white;
  padding-top: 2rem;
  text-transform: uppercase;
`

export default ({ data }) => {
  const images = data.allFile.edges
  const post = data.markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
      </Helmet>
      <Hero>
        <Img
          style={heroImageStyle}
          fluid={images[1].node.childImageSharp.fluid}
        />
      </Hero>
      <TitleComp>{post.frontmatter.title}</TitleComp>
      <Text dangerouslySetInnerHTML={{ __html: post.html }} />
      {images.map((img, index) => {
        // The first two images are for the cover
        if (index === 1 || index === 0) {
          return null
        }
        return (
          <ImgWrapper>
            <Img fluid={img.node.childImageSharp.fluid} />
          </ImgWrapper>
        )
      })}}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $absolutePathRegex: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    allFile(sort: {fields: name, order: ASC}, filter: { absolutePath: { regex: $absolutePathRegex } }) {
      totalCount
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 1800, quality: 90) {
              aspectRatio
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
