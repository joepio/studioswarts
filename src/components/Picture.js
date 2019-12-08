import React from 'react'
import PropTypes from 'prop-types'

const types = {
  title: PropTypes.string,
  url: PropTypes.string,
}

/** Fixed width image with header text links to Project page */
const Picture = (props) => (
  <img src={props.url}/>
)

Picture.propTypes = types;

export default Picture
