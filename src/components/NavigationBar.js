import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

export const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Hans Cabrera</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/hans-cabrera/" target="_blank">LinkedIn</Nav.Link>
                    <Nav.Link href="https://github.com/Hawns4" target="_blank">GitHub</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
