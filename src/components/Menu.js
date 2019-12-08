import React from 'react'
import PropTypes from 'prop-types'

const Menu = props => (
  <nav id="menu">
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Sluiten
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
