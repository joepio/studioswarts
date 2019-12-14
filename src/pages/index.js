import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Carousel from '../components/Carousel'

import pic1 from '../assets/images/home/1.jpg'
import eastpakCover from '../assets/images/projects/eastpak2016/1.jpg'
import budPRCover from '../assets/images/projects/budPR/1.jpg'

import ProjectPreview from '../components/ProjectPreview'
import Columns from '../components/Columns'

// const filename = (fullPath) => {
//   const withExtension = fullPath.replace(/^.*[\\\/]/, '')
//   return withExtension.substr(0, withExtension.lastIndexOf('.'))
// }

const HomeIndex = ({ data }) => {
  // console.log('data', data)
  // const allProjects = data.allMarkdownRemark.edges
  // const allProjects = data
  return (
    <Layout>
      <Helmet
        title="Studio Swarts - spatial design"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      ></Helmet>
      <Carousel />
      <Columns>
        {/* {allProjects.map((project) => {
          console.log('project', project)
          return (
            <ProjectPreview
              title={project.node.frontmatter.title}
              src={budCover}
              url={`projects/${filename(project.node.fileAbsolutePath)}`}
            />
          )
        })} */}
        <ProjectPreview
          title="Eastpak"
          src={eastpakCover}
          url="/projects/eastpak2016"
        />
        <ProjectPreview title="Bud" src={budPRCover} url="/projects/budPR" />
      </Columns>
    </Layout>
  )
}

// export const squareImage = graphql`
//   fragment squareImage on File {
//     childImageSharp {
//       fluid(maxWidth: 200, maxHeight: 200) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `

//  \/assets\/images\/(\S+)\/1\.jpg
// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
//       edges {
//         node {
//           id
//           rawMarkdownBody
//           fileAbsolutePath
//           id
//           excerpt(pruneLength: 250)
//           frontmatter {
//             title
//           }
//         }
//       }
//     }
//     # allImageSharp(filter: { id: { regex: "/assets/images/budPR/1\\.jpg" } }) {
//     #   edges {
//     #     node {
//     #       id
//     #     }
//     #   }
//     # }
//     budPR: file(relativePath: { eq: "/assets/images/projects/budPR/1.jpg" }) {
//       ...squareImage
//     }
//     image2: file(relativePath: { eq: "images/image2.jpg" }) {
//       ...squareImage
//     }
//     image3: file(relativePath: { eq: "images/image3.jpg" }) {
//       ...squareImage
//     }
//   }
// `

export default HomeIndex
