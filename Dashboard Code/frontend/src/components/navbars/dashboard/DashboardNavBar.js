import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
 
export class DashboardNavBar extends Component {
    
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <LinkContainer to="/">
                    <Navbar.Brand className="font-weight-bold"> DanceEdge </Navbar.Brand>
                </LinkContainer>
                <Navbar.Brand className="font-weight-bold text-muted"> Logged in as: {sessionStorage.getItem('name')} </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto" className="justify-content-end">
                        <LinkContainer to="/coach/dashboard">
                            <Nav.Link> Real-Time Dashboard </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/coach/summary">
                            <Nav.Link> Summary </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/coach/demo">
                            <Nav.Link> Demo </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/coach/settings">
                            <Nav.Link> Settings </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default DashboardNavBar
