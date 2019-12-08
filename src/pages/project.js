import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Picture from '../components/Picture'

import pic10 from '../assets/images/pic10.jpg'
import Banner from '../components/Banner'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Landing Page" />
        </Helmet>
        <Banner img={pic10} />
        <p>project</p>
        <Picture img={pic10} />
    </Layout>
)

export default Landing
