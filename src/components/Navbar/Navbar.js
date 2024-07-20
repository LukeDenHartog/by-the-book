import "./Navbar.css";
import React from 'react';
import { Navbar, Container, Offcanvas, Nav, NavDropdown } from 'react-bootstrap';

function NavbarModule() {
  return (
    <Navbar expand="lg" className="mb-3 nav-background">
      <Container fluid>
        <Navbar.Brand href="#" className="brand-name-color"><h1>By the Book</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg"><h2 className="brand-name-color">By the Book</h2></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav>
              <NavDropdown title={<h3>Black Jack (21)</h3>} id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Basic Rules</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Basic Strategy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Counting Cards</NavDropdown.Item>
              </NavDropdown>
              </Nav>
              <Nav>
              <NavDropdown title={<h3>Gambling Advice</h3>} id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Betting</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Sports</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Support for Gambling Addiction</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
            <NavDropdown title={<h3>Account</h3>} id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Sign out</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown title={<h3>About</h3>} id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">About By the Book</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">My GitHub Profile</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarModule;
