import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = props => (
  <header
    id="header"
    className="alt"
    style={{
      position: 'absolute',
      height: '2rem',
      padding: '1rem',
      zIndex: 10,
    }}
  >
    <Link
      to="/"
      style={{
        color: 'white',
      }}
    >
      <strong>Studio Swarts</strong>
    </Link>
  </header>
)

export default Header
