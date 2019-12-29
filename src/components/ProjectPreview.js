import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-background-image'
import PropTypes from 'prop-types'

const types = {
  title: PropTypes.string,
  url: PropTypes.string,
  src: PropTypes.string,
}

const imgStyle = {
  width: '100%',
}

const headerStyle = {
  color: 'white',
  position: 'absolute',
  fontSize: '2rem',
  bottom: '1rem',
  left: '1rem',
}

const previewStyle = {
  maxWidth: '22rem',
  position: 'relative',
  margin: '1rem',
  flexBasis: '19rem',
}

/** Fixed width image with header text links to Project page */
const ProjectPreview = props => (
  <Link to={props.url} style={previewStyle}>
    <h2 style={headerStyle}>{props.title}</h2>
    {props.src && <img alt={props.title} style={imgStyle} src={props.src} />}
    {props.fluid && (
      <Img alt={props.title} style={imgStyle} fluid={props.fluid} />
    )}
  </Link>
)

ProjectPreview.propTypes = types

export default ProjectPreview
