import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic1 from '../assets/images/home/1.jpg'
import budCover from '../assets/images/projects/budPR/1.jpg'
import eastpakCover from '../assets/images/projects/eastpak2016/1.jpg'

import ProjectPreview from '../components/ProjectPreview'
import Columns from '../components/Columns'

class HomeIndex extends React.Component {
  render() {
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
          <ProjectPreview
            title="Budweiser"
            src={budCover}
            url="/projects/budPR"
          />
          <ProjectPreview
            title="Eastpak"
            src={eastpakCover}
            url="/projects/eastpak2016"
          />
        </Columns>
      </Layout>
    )
  }
}

export default HomeIndex
