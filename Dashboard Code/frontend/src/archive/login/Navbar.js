import React, { Component } from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarStyledComponents';
 

export class Navbar extends Component {
    render() {
        return (
            <Nav>
                <NavbarContainer>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/login'> Login </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/register'> Register </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        )
    }
}

export default Navbar
