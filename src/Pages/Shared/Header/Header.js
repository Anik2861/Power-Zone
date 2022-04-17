import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css'
import logo from '../../../images/logo.png'


const Header = () => {
    return (
        <Navbar className='navStyle' collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to='/' href="#home">
                  <img style={{height:'3rem' ,width:'3rem', color:'white'}} src={logo} alt="" />  Power Zone</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link href="home#services" className='' >Services</Nav.Link>
                        <Nav.Link  href="home#member">Become A Member</Nav.Link>
                        <Nav.Link as={Link} to='/blog' >Blog</Nav.Link>
                        <Nav.Link as={Link} to='/about'  href="#deets" className='nav-title'>About</Nav.Link>
                    </Nav>
                    <Nav>
                       
                        <Nav.Link as={Link} to='/register' eventKey={2} href="#memes" className='nav-title'>
                            Sing Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;