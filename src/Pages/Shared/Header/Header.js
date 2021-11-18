import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div>
         <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to="/" className="drone-logo">
                     <Navbar.Brand href="#" className="drone-logo">Traveler</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="d-lg-flex justify-content-lg-end">
                <Nav
                    className="my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    {
                        user?.email ? 
                        <>    
                              <Nav.Link as={Link} to="/order">My Order</Nav.Link>
                              <Nav.Link as={Link} to="/manage">Manage Order</Nav.Link>
                              <Nav.Link as={Link} to="/service">Add Service</Nav.Link>
                              <Nav.Link onClick={logOut}>Log Out</Nav.Link>
                              <Nav.Link>{user?.displayName}</Nav.Link>
                        </>
                        :
                        <Nav.Link as={Link} to="/login">Log in</Nav.Link>
                    }
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;