import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, NavigationBrand, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Authorization/hooks/useAuth';

const Navigation = () => {
    const { user,logOutUser } = useAuth();
    console.log(user.email);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Go Forward</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {
                            user?.email ?
                                <Link to="/login">
                                <Button onClick={logOutUser}>Logout</Button>
                                </Link>

                                :

                                <Link to="/login">Login</Link>

                        }
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;