import React from 'react'

import { styles } from '../styles'

const Banner = (props) => (
    <section id="banner" className="major" style={{
        background: `url(${props.img})`,
        height: '50rem',
        paddingTop: '10rem',
        fontSize: '3rem',
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
    }}>
        <div className="inner">
            <header className="major" style={{
                textAlign: 'center',
                textDecoration: 'none',
                color: 'white',
                fontSize: '2rem',
                fontFamily: styles.headerFont,
            }}>
                {props.children}
            </header>
        </div>
    </section>
)

export default Banner
