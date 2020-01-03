import React from 'react'
import styled from 'styled-components'
import { styles } from '../styles'
import logo from '../assets/logo.svg'
import { Link } from 'gatsby'
import { AboutLink } from './Navbar'

const mail = "steven@studioswarts.com"

export const LogoImg = styled.img`
  position: relative;
  width: 7rem;
  height: 4rem;
  margin-bottom: 2rem;
`

const FooterWrapper = styled.footer`
  background-color: black;
  color: white;
  text-align: center;
  padding: 3rem;
  font-family: ${styles.bodyFont};
  text-transform: uppercase;
  font-size: .8rem;
  color: rgb(210,210,210);

  a {
    color: rgb(210,210,210);
    text-decoration: none;
  }

  p {
    margin-bottom: .5rem;
  }
`

const Footer = () =>
  <FooterWrapper id="contact">
    <Link to="/">
      <LogoImg src={logo} alt="Studio Swarts logo" />
    </Link>
    <p>
      <AboutLink />
    </p>
    <p>
      <a href="tel:+310621210124">+31(0) 621 210 124</a>
    </p>
    <p>
      <a href={mail}>{mail}</a>
    </p>
    <p>
      The Netherlands
    </p>
  </FooterWrapper >


export default Footer
