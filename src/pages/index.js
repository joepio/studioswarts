import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic1 from '../assets/images/home/1.jpg'

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
                >
                </Helmet>
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
                    <ProjectPreview />
                    <ProjectPreview />
                    <ProjectPreview />
                    <ProjectPreview />
                    <ProjectPreview />
                    <ProjectPreview />
                </Columns>
                <Link to="/generic" className="image">
                    <img src={pic1} alt="" />
                </Link>
                <Banner />
            </Layout>
        )
    }
}

export default HomeIndex
