import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-background-image'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { styles } from '../styles'

const types = {
  title: PropTypes.string,
  url: PropTypes.string,
  src: PropTypes.string,
}

const Header = styled.h2`
  color: white;
  position: absolute;
  font-family: ${styles.bodyFont};
  font-weight: 600;
  font-size: 1.3rem;
  bottom: 1rem;
  left: 1rem;
  z-index: 1;
`

const Wrapper = styled(Link)`
  width: calc(33.333% - 1rem);
  position: relative;
  margin-bottom: 2rem;
  overflow: hidden;

  &:nth-child(3n+1) { order: 1; }
  &:nth-child(3n+2) { order: 2; }
  &:nth-child(3n)   { order: 3; }

  @media screen and (max-width: ${styles.mediumScreen}) {
    width: calc(50% - 1rem);

    &:nth-child(2n+1) { order: 1; }
    &:nth-child(2n)   { order: 2; }
  }

  @media screen and (max-width: ${styles.smallScreen}) {
    width: 100%;
    order: initial !important;
  }
`

const BackImg = styled.img`
  width: 100%;
  transition: transform;
  transition-duration: 1.3s;

  &:hover {
    transition-duration: .3s;
    transform: scale(1.1)
  }
`

const BackImgFluid = styled(Img)`
  width: 100%;
`

/** Fixed width image with header text links to Project page */
const ProjectPreview = props => (
  <Wrapper to={props.url}>
    <Header>{props.title}</Header>
    {props.src && <BackImg alt={props.title} src={props.src} />}
    {props.fluid && (
      <BackImgFluid alt={props.title} fluid={props.fluid} />
    )}
  </Wrapper>
)

ProjectPreview.propTypes = types

export default ProjectPreview
