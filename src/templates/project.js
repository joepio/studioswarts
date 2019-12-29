import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { styles } from '../styles'
import styled from 'styled-components'

const heroStyle = {
  height: '50rem',
  fontSize: '3rem',
  overflow: 'hidden',
  position: 'relative',
}

const heroImageStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
}

const heroTextStyle = {
  position: 'absolute',
  bottom: '2rem',
  fontFamily: styles.headerFont,
  marginLeft: '1rem',
  color: 'white',
  zIndex: 1,
}

const textStyle = {
  textAlign: 'center',
  fontSize: '1.2rem',
  padding: '3rem',
  maxWidth: '70vw',
  margin: 'auto',
  fontFamily: styles.bodyFont,
}

const TitleComp = styled.h1`
  font-family: Faustina, serif;
  font-size: 4rem;
  text-align: center;
  color: #13131354;
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
      <div style={heroStyle}>
        <Img
          style={heroImageStyle}
          fluid={images[1].node.childImageSharp.fluid}
        />
      </div>
      <TitleComp>{post.frontmatter.title}</TitleComp>
      <div style={textStyle} dangerouslySetInnerHTML={{ __html: post.html }} />
      {images.map((img, index) => {
        // The first two images are for the cover
        if (index === 1 || index === 0) {
          return null
        }
        return (
          <div
            style={{
              padding: '1rem',
              maxWidth: '70vw',
              paddingTop: '0',
              margin: 'auto',
            }}
          >
            <Img fluid={img.node.childImageSharp.fluid} />
          </div>
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
