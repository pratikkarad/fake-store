import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Menu = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" >
                <Container>
                    <Navbar.Brand href="/">Fake Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link href="#memes">Dank memes</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    )
}

export default Menu;