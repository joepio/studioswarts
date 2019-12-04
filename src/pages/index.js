import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic10 from '../assets/images/pic10.jpg'


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
                <Banner img={pic10}>
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
                <Link to="/generic" className="image">
                    <img src={pic10} alt="" />
                </Link>
                <Banner />
            </Layout>
        )
    }
}

export default HomeIndex
