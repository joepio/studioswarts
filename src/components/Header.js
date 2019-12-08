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
    {/* <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav> */}
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
