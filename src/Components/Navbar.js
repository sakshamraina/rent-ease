import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  const buttonStyle = {
    marginRight: '10px',
    borderRadius: '10px',
  };

  const navbarStyle = {
    backgroundColor: '#f4f4f4', 
  };

  const darkSkyBlueButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#91c6e6',
    color: 'black',
  };

  const lightSkyBlueButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#cde8f7',
    color: 'black',
  };

  return (
    // Navbar component
    <Navbar style={navbarStyle} variant="light" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/" style={{ color: 'black' }}>RentEase</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Button
            variant="darkskyblue"
            size="sm"
            as={Link}
            to="/login"
            style={darkSkyBlueButtonStyle}
          >
            Login
          </Button>
          <Button
            variant="lightskyblue"
            size="sm"
            as={Link}
            to="/signup"
            style={lightSkyBlueButtonStyle}
          >
            Signup
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;