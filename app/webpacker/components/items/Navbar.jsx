import React from 'react'
import styled from 'styled-components'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const NavbarWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 767px) {
    display: block;
  }
`

export default class Example extends React.Component {
state = {
  collapsed: true,
}

constructor(props) {
  super(props)

  this.toggleNavbar = this.toggleNavbar.bind(this)
}

toggleNavbar() {
  const { collapsed } = this.state
  this.setState({
    collapsed: !collapsed,
  })
}

render() {
  const { collapsed } = this.state
  return (
    <NavbarWrapper>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </NavbarWrapper>
  )
}
}
