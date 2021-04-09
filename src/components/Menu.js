import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Menu = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" >
                <Container>
                    <Navbar.Brand href="/">Fake Store</Navbar.Brand>
                </Container>

            </Navbar>
        </div>
    )
}

export default Menu;