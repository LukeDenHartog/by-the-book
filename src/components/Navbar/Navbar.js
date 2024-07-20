import "./Navbar.css";
import React from 'react';
import { Navbar, Container, Offcanvas, Nav, NavDropdown } from 'react-bootstrap';

function NavbarModule() {
  return (
    <Navbar expand="lg" className="mb-3 nav-background">
      <Container fluid>
        <Navbar.Brand href="#" id="brand-name">By the Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto">
              <NavDropdown title="Blackjack (21)" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Basic Rules</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Basic Strategy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Counting Cards</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Gambling Advice" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Betting</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Sports</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Support for Gambling Addiction</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown title="About" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">About By the Book</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">My GitHub Profile</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Account" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Sign out</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarModule;
