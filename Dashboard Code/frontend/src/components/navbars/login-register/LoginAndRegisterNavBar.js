import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

// how to implement LinkContainer: https://medium.com/how-to-react/use-react-router-link-with-bootstrap-315a8b88e129

export class LoginAndRegisterNavBar extends Component {
    render() {

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
                <LinkContainer to="/">
                    <Navbar.Brand className="font-weight-bold" > DanceEdge </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end"  >
                    <Nav className="mr-auto" className="justify-content-end">
                        <LinkContainer to="/login">
                            <Nav.Link > Login </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/register">
                            <Nav.Link > Registration </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default LoginAndRegisterNavBar
