import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  background-color: black;
`

const StyledLinkTitle = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.primary};
`

const HeaderWrapper = styled.nav`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 3;
`

const RouteWrapper = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: black;

  @media screen and (max-width: 800px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    z-index: 1;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 400ms ease-in-out;
  }

  &.showing {
    transform: scale(1, 1);
  }
`

const RouteListItem = styled.li`
  margin-left: 1.4rem;

  @media screen and (max-width: 800px) {
    padding: 0.75em 0;
  }
`

const RouteLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  position: relative;
  font-size: 1.2rem;

  &:hover {
    color: #eee;
  }

  &:before {
    content: "";
    position: absolute;
    background-color: #eee;
    width: 100%;
    height: 1px;
    bottom: -2px;
    left: 0;
    visibility: hidden;
    transform: scaleX(0);
    -webkit-transform: scaleX(0);
    -webkit-transition: transform 0.25s ease-in-out 0s;
    transition: transform 0.25s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`

const MenuButton = styled.button`
  height: 35px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: black;
  border: 0;

  @media screen and (min-width: 800px) {
    display: none;
  }
`

const BurgerIcon = styled.span`
  display: block;
  height: 2px;
  width: 2em;
  border-radius: 2px;
  position: relative;
  background-color: white;

  &::before,
  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 2em;
    border-radius: 2px;
    position: absolute;
    background-color: white;
  }

  &::before {
    bottom: 7px;
  }

  &::after {
    top: 7px;
  }
`

const StyledTitle = styled.h1`
  color: white;
  font-size: 32px;
  text-transform: uppercase;
  margin: 0.3em 0;
`

const SuperScript = styled.sup`
  vertical-align: super;
  font-size: 20px;
  line-height: 0.5em;
  top: 0.15em;
  position: relative;
`

const Header = ({ siteTitle }) => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <StyledHeader>
      <HeaderWrapper>
        <MenuButton onClick={toggleMenu}>
          <BurgerIcon />
        </MenuButton>
        <StyledLinkTitle to="/">
          <StyledTitle>
            Boligbetong <SuperScript>AS</SuperScript>
          </StyledTitle>
        </StyledLinkTitle>
        <RouteWrapper className={showMenu ? "showing" : ""}>
          <RouteListItem>
            <RouteLink to="/prosjekter">Prosjekter</RouteLink>
          </RouteListItem>
          <RouteListItem>
            <RouteLink to="/om">Om oss</RouteLink>
          </RouteListItem>
        </RouteWrapper>
      </HeaderWrapper>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
