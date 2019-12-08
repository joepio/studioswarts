import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import { styles } from "../styles"

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
  margin: '2rem',
  fontFamily: styles.bodyFont,
}

export default ({ data }) => {
  const images = data.allFile.edges
  const post = data.markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
      </Helmet>
      <div style={heroStyle}>
        <h1 style={heroTextStyle}>{post.frontmatter.title}</h1>
        <Img style={heroImageStyle} fluid={images[1].node.childImageSharp.fluid} />
      </div>
      <div style={textStyle} dangerouslySetInnerHTML={{ __html: post.html }} />
      {images.map(img => (
        <div style={{
          padding: "1rem",
          paddingTop: "0",
        }}>
          <Img fluid={img.node.childImageSharp.fluid} />
        </div>
      ))}
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
    allFile(
      filter: {
        absolutePath: { regex: $absolutePathRegex }
      }
    ) {
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
