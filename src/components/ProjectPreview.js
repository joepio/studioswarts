import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const types = {
  title: PropTypes.string,
  url: PropTypes.string,
}

/** Fixed width image with header text links to Project page */
const ProjectPreview = (props) => (
  <Link to={props.url}>
    <h2>props.title</h2>
  </Link>
)

ProjectPreview.propTypes = types;

export default ProjectPreview
