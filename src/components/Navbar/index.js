import React from 'react'
import { NavbarContainer, Nav, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'
import { FaBars } from "react-icons/fa"

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        dolla
                    </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">about</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects">projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>


        </>
    )
}

export default Navbar
