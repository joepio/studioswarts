import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/logo.svg'
import styled from 'styled-components'

const LogoLink = styled(Link)`
`

const LogoImg = styled.img`
  position: absolute;
  width: 7rem;
  height: 4rem;
  left: calc(50% - 3.5rem);
`

const NavBar = styled.header`
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

const Header = props => (
  <NavBar>
    <LogoLink to="/">
      <LogoImg src={logo} alt="Studio Swarts logo" />
    </LogoLink>
    <NavLinks>
      <LinkItem>over</LinkItem>
      <LinkItem>hallo</LinkItem>
    </NavLinks>
  </NavBar>
)

export default Header
