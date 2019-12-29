import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Carousel from '../components/Carousel'

import budPR from '../assets/images/projects/budPR/1.jpg'
import casperBerlin from '../assets/images/projects/casperBerlin/1.jpg'
import casperSleeptour from '../assets/images/projects/casperSleeptour/1.jpg'
import dailyPaperSmib from '../assets/images/projects/dailyPaperSmib/1.jpg'
import eastpak2016 from '../assets/images/projects/eastpak2016/1.jpg'
import eastpak2018Lissabon from '../assets/images/projects/eastpak2018Lissabon/1.jpg'
import eastpak2018Rotterdam from '../assets/images/projects/eastpak2018Rotterdam/1.jpg'
import jupiler from '../assets/images/projects/jupiler/1.jpg'
import karl from '../assets/images/projects/karl/1.jpg'
import kingpins from '../assets/images/projects/kingpins/1.jpg'
import napapijri from '../assets/images/projects/napapijri/1.jpg'
import panorama from '../assets/images/projects/panorama/1.jpg'
import scotch from '../assets/images/projects/scotch/1.jpg'
import unilever from '../assets/images/projects/unilever/1.jpg'
import wrangler from '../assets/images/projects/wrangler/1.jpg'
import zalando from '../assets/images/projects/zalando/1.jpg'

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
        <ProjectPreview title="Bud" src={budPR} url="/projects/budPR" />
        <ProjectPreview title="Casper Berlin" src={casperBerlin} url="/projects/casperBerlin" />
        <ProjectPreview title="Casper Sleep Tour" src={casperSleeptour} url="/projects/casperSleeptour" />
        <ProjectPreview title="Daily Paper Smib" src={dailyPaperSmib} url="/projects/dailyPaperSmib" />
        <ProjectPreview title="Eastpak 2016" src={eastpak2016} url="/projects/eastpak2016" />
        <ProjectPreview title="Eastpak 2018 Lissabon" src={eastpak2018Lissabon} url="/projects/eastpak2018Lissabon" />
        <ProjectPreview title="Eastpak 2018 Rotterdam" src={eastpak2018Rotterdam} url="/projects/eastpak2018Rotterdam" />
        <ProjectPreview title="Jupiler" src={jupiler} url="/projects/jupiler" />
        <ProjectPreview title="Karl" src={karl} url="/projects/karl" />
        <ProjectPreview title="Kingpins" src={kingpins} url="/projects/kingpins" />
        <ProjectPreview title="Napapijri" src={napapijri} url="/projects/napapijri" />
        <ProjectPreview title="Panorama" src={panorama} url="/projects/panorama" />
        <ProjectPreview title="Scotch & Soda" src={scotch} url="/projects/scotch" />
        <ProjectPreview title="Unilever" src={unilever} url="/projects/unilever" />
        <ProjectPreview title="Wrangler" src={wrangler} url="/projects/wrangler" />
        <ProjectPreview title="Zalando" src={zalando} url="/projects/zalando" />
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
