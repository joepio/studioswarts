import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Carousel from '../components/Carousel'

import budPR from '../assets/images/projects/budPR/01.jpg'
import casperBerlin from '../assets/images/projects/casperBerlin/01.jpg'
import casperSleeptour from '../assets/images/projects/casperSleeptour/01.jpg'
import dailyPaperSmib from '../assets/images/projects/dailyPaperSmib/01.jpg'
import eastpak2016 from '../assets/images/projects/eastpak2016/01.jpg'
import eastpak2018Lissabon from '../assets/images/projects/eastpak2018Lissabon/01.jpg'
import eastpak2018Rotterdam from '../assets/images/projects/eastpak2018Rotterdam/01.jpg'
import jupiler from '../assets/images/projects/jupiler/01.jpg'
import karl from '../assets/images/projects/karl/01.jpg'
import kingpins from '../assets/images/projects/kingpins/01.jpg'
import napapijri from '../assets/images/projects/napapijri/01.jpg'
import panorama from '../assets/images/projects/panorama/01.jpg'
import scotch from '../assets/images/projects/scotch/01.jpg'
import unilever from '../assets/images/projects/unilever/01.jpg'
import wrangler from '../assets/images/projects/wrangler/01.jpg'
import zalando from '../assets/images/projects/zalando/01.jpg'

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
        <ProjectPreview title="Budweiser PR" src={budPR} url="/projects/budPR" />
        <ProjectPreview title="Casper KaDeWe" src={casperBerlin} url="/projects/casperBerlin" />
        <ProjectPreview title="Casper SleepTour" src={casperSleeptour} url="/projects/casperSleeptour" />
        <ProjectPreview title="Daily Paper X Smib" src={dailyPaperSmib} url="/projects/dailyPaperSmib" />
        <ProjectPreview title="Eastpak Amsterdam" src={eastpak2016} url="/projects/eastpak2016" />
        <ProjectPreview title="Eastpak Lisbon" src={eastpak2018Lissabon} url="/projects/eastpak2018Lissabon" />
        <ProjectPreview title="Eastpak Rotterdam" src={eastpak2018Rotterdam} url="/projects/eastpak2018Rotterdam" />
        <ProjectPreview title="Jupiler festival" src={jupiler} url="/projects/jupiler" />
        <ProjectPreview title="Karl Lagerfeld" src={karl} url="/projects/karl" />
        <ProjectPreview title="Kingpins" src={kingpins} url="/projects/kingpins" />
        <ProjectPreview title="Napapijri" src={napapijri} url="/projects/napapijri" />
        <ProjectPreview title="Panorama" src={panorama} url="/projects/panorama" />
        <ProjectPreview title="Scotch & Soda" src={scotch} url="/projects/scotch" />
        <ProjectPreview title="Unilever" src={unilever} url="/projects/unilever" />
        <ProjectPreview title="Wrangler" src={wrangler} url="/projects/wrangler" />
        <ProjectPreview title="Zalando B&B" src={zalando} url="/projects/zalando" />
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
