import React from 'react'
import PropTypes from 'prop-types'

const types = {
  children: PropTypes.children,
}

/** Fixed width image with header text links to Project page */
const Columns = props => (
  <div
    style={{
      display: 'flex',
      margin: '1rem',
    }}
  >
    {props.children}
  </div>
)

Columns.propTypes = types

export default Columns
