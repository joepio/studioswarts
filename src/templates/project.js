import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Helmet from 'react-helmet'
import Layout from "../components/layout"

export default ({ data }) => {
  const images = data.allFile.edges
  const post = data.markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
      </Helmet>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
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
