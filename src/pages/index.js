import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic1 from '../assets/images/home/1.jpg'
import budCover from '../assets/images/projects/budPR/1.jpg'
import eastpakCover from '../assets/images/projects/eastpak2016/1.jpg'

import ProjectPreview from '../components/ProjectPreview'
import Columns from '../components/Columns'

const HomeIndex = ({ data }) => {
  const allProjects = data.allMarkdownRemark.edges
  console.log(allProjects)
  return (
    <Layout>
      <Helmet
        title="Studio Swarts - spatial design"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      ></Helmet>
      <Banner img={pic1}>
        <Link to="/budweiser">
          <h2>BUDWEISER</h2>
        </Link>
        <Link>
          <h2>BUDWEISER</h2>
        </Link>
        <Link>
          <h2>BUDWEISER</h2>
        </Link>
      </Banner>
      <Columns>
        {allProjects.map(project => (
          <ProjectPreview
            title={project.frontMatter.title}
            src={budCover}
            url="/projects/budPR"
          />
        ))}
        {/* <ProjectPreview
            title="Eastpak"
            src={eastpakCover}
            url="/projects/eastpak2016"
          /> */}
      </Columns>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
          }
        }
      }
    }
    allFile(filter: { absolutePath: "/assets/images/*1.jpg" }) {
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

export default HomeIndex
