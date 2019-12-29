import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../assets/logo.svg'
import styled from 'styled-components'
import AboutFiller from './AboutFiller'

const LogoLink = styled(Link)`
`

export const LogoImg = styled.img`
  position: absolute;
  width: 7rem;
  height: 4rem;
  left: calc(50% - 3.5rem);
`

const NavBar = styled.nav`
  position: absolute;
  height: 2rem;
  z-index: 10;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
`

const NavLinks = styled.div`
  margin-left: auto;
`

const LinkItem = styled(Link)`
  color: blue;
`

const AboutLink = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <LinkItem
        onMouseOver={() => setOpen(true)}
        onMouseOut={() => setOpen(false)}
      >about</LinkItem>
      {isOpen ? <AboutFiller /> : null}
    </div>
  )
};

const Header = () => (
  <NavBar>
    <LogoLink to="/">
      <LogoImg src={logo} alt="Studio Swarts logo" />
    </LogoLink>
    <NavLinks>
      <AboutLink />
      <LinkItem to="/about">about</LinkItem>
      <LinkItem>contact</LinkItem>
    </NavLinks>
  </NavBar>
)

export default Header
