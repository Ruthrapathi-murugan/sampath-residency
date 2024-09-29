import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Sampath Residency</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
            <Nav.Link as={Link} to="/rooms" className="nav-item">Rooms</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item">About Us</Nav.Link>
            <Nav.Link as={Link} to="/todo" className="nav-item">Things To Do</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
